import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Chat} from '../../../models/chat.model';
import {ChatService} from '../../../services/chat/chat.service';
import {User} from '../../../models/user.model';
import {AuthenticationService} from '../../../services/authentication/authentication.service';

@Component({
  selector: 'app-chat-information',
  templateUrl: './chat-information.component.html',
  styleUrls: ['./chat-information.component.css']
})
export class ChatInformationComponent implements OnChanges{
  @Output() public closeChatInformationPanelEvent = new EventEmitter();
  @Input() public chatId: number;
  public chat: Chat;

  constructor(private chatService: ChatService, private authenticationService: AuthenticationService) {}

  public clickGoBackButtonListener(): void {
    this.closeChatInformationPanelEvent.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.chatId !== undefined){
      this.chatService.getChatById(this.chatId)
        .then((chat: Chat) => this.chat = chat);
    }
  }

  public isAdminUser(user: User): boolean{
    return user.login === this.chat.adminUser.login;
  }
  public isCurrentUser(user: User): boolean{
    return user.login === this.authenticationService.getUserName();
  }
  public isCurrentUserAdmin(): boolean{
    return this.chat.adminUser.login === this.authenticationService.getUserName();
  }

  public deleteChatUser(user: User): void{
    this.chatService.deleteUserFromChat(user.login, this.chatId)
      .then(() => {
        this.chat.users.splice(this.chat.users.indexOf(user), 1);
      });
  }
}
