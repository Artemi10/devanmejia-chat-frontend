import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../../../models/user.model';
import {UsersService} from '../../../services/users/users.service';
import {NewChat} from '../../../models/new-chat.model';
import {ChatsService} from '../../../services/chats/chats.service';
import {ChatFromList} from '../../../models/chat-from-list.model';


@Component({
  selector: 'app-create-chat-panel',
  templateUrl: './create-chat-panel.component.html',
  styleUrls: ['./create-chat-panel.component.css']
})
export class CreateChatPanelComponent {
  public chatName = '';
  public warningMessage = '';
  private chatUsers: User[] = [];
  private chatUsersAmount = 0;
  @Output() public createNewChatEvent = new EventEmitter();
  @Output() public closeCreateChatPanelEvent = new EventEmitter();
  @Output() public showUserProfileEvent = new EventEmitter();

  constructor(public usersService: UsersService, private chatsService: ChatsService) {}

  public deleteUserFromChatList(user: User): void{
    this.chatUsers.splice(this.chatUsers.indexOf(user));
    this.chatUsersAmount--;
  }
  public addUserToChatList(user: User): void{
    this.chatUsers.push(user);
    this.chatUsersAmount++;
  }

  public createChat(): void{
    if (this.chatUsers.length > 0 && this.chatName !== ''){
      const newChat: NewChat = new NewChat(this.chatName, this.chatUsers);
      this.chatsService.createChat(newChat)
        .subscribe((chat: ChatFromList) => {
          this.createNewChatEvent.emit(chat);
        });
    }
    else{
      this.warningMessage = 'Add users or write correct name';
    }
  }

  public isChatNameEmpty(): boolean{
    return this.chatName === '';
  }
  public isCreateButtonDisabled(): boolean{
    return this.isChatNameEmpty() || this.chatUsersAmount === 0;
  }

  public clickGoBackButtonListener(): void{
    this.closeCreateChatPanelEvent.emit();
  }

  public clickUserEventListener(user: User): void{
    this.showUserProfileEvent.emit(user);
  }



}
