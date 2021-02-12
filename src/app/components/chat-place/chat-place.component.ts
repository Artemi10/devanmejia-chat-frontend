import { Component} from '@angular/core';
import {MessagesService} from '../../services/messages/messages.service';
import {User} from '../../models/user.model';


@Component({
  selector: 'app-chat-place',
  templateUrl: './chat-place.component.html',
  styleUrls: ['./chat-place.component.css']
})
export class ChatPlaceComponent {
  public isChatListOpened: boolean;
  public isCurrentUserProfileOpened: boolean;
  public isUserProfileOpened: boolean;
  public currentChatId: number;
  public clickedUser: User;

  constructor(public messagesService: MessagesService) {
    this.currentChatId = -1;
    this.isChatListOpened = true;
    this.isCurrentUserProfileOpened = false;
    this.isUserProfileOpened = false;
  }

  public clickCreateChatButtonListener(): void {
    this.isChatListOpened = false;
  }
  public chooseNewChatListener(id: number): void {
    this.currentChatId = id;
    this.messagesService.getMessagesByChatId(id);
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
}
