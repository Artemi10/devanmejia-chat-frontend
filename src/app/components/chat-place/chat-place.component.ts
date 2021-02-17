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
  public isCreateChatPanelOpened: boolean;
  public isChatInformationPanelOpened: boolean;
  public isCurrentUserProfileOpened: boolean;
  public isUserProfileOpened: boolean;
  public isUserListOpened: boolean;
  public currentChat: ChatFromList;
  public clickedUser: User;

  constructor(public messagesService: MessagesService) {
    this.isChatListOpened = true;
    this.isCreateChatPanelOpened = false;
    this.isChatInformationPanelOpened = false;
    this.isCurrentUserProfileOpened = false;
    this.isUserProfileOpened = false;
    this.isUserListOpened = false;
  }

  // chat list
  public openChatList(chat: ChatFromList): void{
    this.currentChat = chat;
    this.messagesService.getMessagesByChatId(chat.id);
    this.isCreateChatPanelOpened = false;
    this.isChatInformationPanelOpened = false;
    this.isUserListOpened = false;
    this.isChatListOpened = true;
  }
  public closeChatList(): void{
    this.isChatListOpened = false;
  }
  // user list
  public openUserList(): void{
    this.isCreateChatPanelOpened = false;
    this.isChatInformationPanelOpened = false;
    this.isChatListOpened = false;
    this.isUserListOpened = true;
  }
  public closeUserList(): void{
    this.isUserListOpened = false;
    this.isChatListOpened = true;
  }
  // create chat panel
  public openCreateChatPanel(): void{
    this.isChatInformationPanelOpened = false;
    this.isChatListOpened = false;
    this.isUserListOpened = false;
    this.isCreateChatPanelOpened = true;
  }
  public closeCreateChatPanel(): void{
    this.isCreateChatPanelOpened = false;
    this.isChatListOpened = true;
  }
  // current user profile
  public openChatInformationPanel(): void{
    this.isChatListOpened = false;
    this.isCreateChatPanelOpened = false;
    this.isUserListOpened = false;
    this.isChatInformationPanelOpened = true;
  }
  public closeChatInformationPanel(): void{
    this.isChatInformationPanelOpened = false;
    this.isChatListOpened = true;
  }
  // chat information panel
  public openCurrentUserProfile(user: User): void{
    this.clickedUser = user;
    this.isCurrentUserProfileOpened = true;
    this.isUserListOpened = false;
    this.isUserProfileOpened = false;
  }
  public closeCurrentUserProfile(): void{
    this.isCurrentUserProfileOpened = false;
    this.isChatListOpened = true;
  }
  // user profile
  public openUserProfile(user: User): void{
    this.clickedUser = user;
    this.isCurrentUserProfileOpened = false;
    this.isUserProfileOpened = true;
  }
  public closeUserProfile(): void{
    this.isUserProfileOpened = false;
  }

  public chooseNewChatListener(chat: ChatFromList): void {
    this.currentChat = chat;
    this.messagesService.getMessagesByChatId(chat.id);
    this.isChatListOpened = true;
  }
  public isChatOpened(): boolean{
    if (this.currentChat){
      return true;
    }
  }
}
