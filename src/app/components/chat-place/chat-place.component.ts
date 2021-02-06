import { Component} from '@angular/core';
import {MessagesService} from '../../services/messages/messages.service';
import {Message} from '../../models/message.model';


@Component({
  selector: 'app-chat-place',
  templateUrl: './chat-place.component.html',
  styleUrls: ['./chat-place.component.css']
})
export class ChatPlaceComponent  {
  public openChatPanelListenerFlag: boolean;
  public currentChatId: number;

  constructor(public messagesService: MessagesService) {
    this.currentChatId = -1;
    this.openChatPanelListenerFlag = false;
  }

  public clickCreateChatButtonListener(): void{
    this.openChatPanelListenerFlag = !this.openChatPanelListenerFlag;
  }
  public chooseNewChatListener(id: number): void{
    this.currentChatId = id;
    this.messagesService.getMessagesByChatId(id);
  }
}
