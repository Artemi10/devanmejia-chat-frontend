import {Component, Output, EventEmitter} from '@angular/core';
import {ChatsService} from '../../../../../services/chats/chats.service';

@Component({
  selector: 'app-chat-panel',
  templateUrl: './chat-panel.component.html',
  styleUrls: ['./chat-panel.component.css']
})
export class ChatPanelComponent{
  public chatName = '';
  @Output() public clickCreateButtonEvent = new EventEmitter();

  constructor(private chatsService: ChatsService) {
    this.chatsService.showChatByName(this.chatName);
    this.chatsService.addNewChatEvent
      .subscribe(() => {
        this.chatsService.showChatByName('');
        this.chatName = '';
      });
  }

  public changeChatNameListener(): void{
    this.chatsService.showChatByName(this.chatName);
  }
  public clickCreateButton(): void{
    this.clickCreateButtonEvent.emit();
  }
}
