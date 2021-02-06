import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../../../models/user.model';
import {UsersService} from '../../../services/users/users.service';
import {NewChat} from '../../../models/new-chat.model';
import {ChatsService} from '../../../services/chats/chats.service';


@Component({
  selector: 'app-create-chat-panel',
  templateUrl: './create-chat-panel.component.html',
  styleUrls: ['./create-chat-panel.component.css']
})
export class CreateChatPanelComponent {
  public users: User[] = [];
  public chatName = '';
  public warningMessage = '';
  private chatUsers: User[] = [];
  @Input() public openChatPanelListenerFlag: boolean;
  @Output() public createNewChatEvent = new EventEmitter();

  constructor(private usersService: UsersService, private chatsService: ChatsService) {
    this.usersService.getAllUsers().then((users: User[]) => this.users = users);
  }

  public deleteUserFromChatList(user: User): void{
    this.chatUsers.splice(this.chatUsers.indexOf(user));
  }
  public addUserToChatList(user: User): void{
    this.chatUsers.push(user);
  }

  public createChat(): void{
    if (this.chatUsers.length > 0 && this.chatName !== ''){
      const newChat: NewChat = new NewChat(this.chatName, this.chatUsers);
      this.chatsService.createChat(newChat)
        .subscribe((id: number) => {
          this.openChatPanelListenerFlag = false;
          this.createNewChatEvent.emit(id);
        });
    }
    else{
      this.warningMessage = 'Add users or write correct name';
    }

  }




}
