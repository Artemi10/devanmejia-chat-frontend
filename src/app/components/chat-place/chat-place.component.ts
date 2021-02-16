import { Component} from '@angular/core';
import {MessagesService} from '../../services/messages/messages.service';
import {User} from '../../models/user.model';
import {ChatFromList} from '../../models/chat-from-list.model';


@Component({
  selector: 'app-chat-place',
  templateUrl: './chat-place.component.html',
  styleUrls: ['./chat-place.component.css']
})
export class ChatPlaceComponent {
  public isChatListOpened: boolean;
  public isCurrentUserProfileOpened: boolean;
  public isUserProfileOpened: boolean;
  public currentChat: ChatFromList;
  public clickedUser: User;

  constructor(public messagesService: MessagesService) {
    this.isChatListOpened = true;
    this.isCurrentUserProfileOpened = false;
    this.isUserProfileOpened = false;
  }

  public clickCreateChatButtonListener(): void {
    this.isChatListOpened = false;
  }
  public chooseNewChatListener(chat: ChatFromList): void {
    this.currentChat = chat;
    this.messagesService.getMessagesByChatId(chat.id);
    this.isChatListOpened = true;
  }
  public closeCreateChatPanel(): void {
    this.isChatListOpened = true;
  }
  public openCurrentUserProfile(user: User): void{
    this.clickedUser = user;
    this.isCurrentUserProfileOpened = true;
    this.isUserProfileOpened = false;
  }
  public closeCurrentUserProfile(): void{
    this.isCurrentUserProfileOpened = false;
  }
  public closeUserProfile(): void{
    this.isUserProfileOpened = false;
  }
  public openUserProfile(user: User): void{
    this.clickedUser = user;
    this.isCurrentUserProfileOpened = false;
    this.isUserProfileOpened = true;
  }
  public isChatOpened(): boolean{
    if (this.currentChat){
      return true;
    }
  }
}
