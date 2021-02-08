import { Component} from '@angular/core';
import {MessagesService} from '../../services/messages/messages.service';


@Component({
  selector: 'app-chat-place',
  templateUrl: './chat-place.component.html',
  styleUrls: ['./chat-place.component.css']
})
export class ChatPlaceComponent {
  public isChatListOpened: boolean;
  public currentChatId: number;

  constructor(public messagesService: MessagesService) {
    this.currentChatId = -1;
    this.isChatListOpened = true;
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
}
