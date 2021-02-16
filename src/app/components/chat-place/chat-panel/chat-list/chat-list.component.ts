import {Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges} from '@angular/core';
import {ChatsService} from '../../../../services/chats/chats.service';
import {Message} from '../../../../models/message.model';
import {ChatFromList} from '../../../../models/chat-from-list.model';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent{
  @Output() public clickChatEvent = new EventEmitter();
  @Output() public clickCreateButtonEvent = new EventEmitter();

  constructor(public chatsService: ChatsService) {
    chatsService.getChats();
  }

  public clickChatEventListener(chat: ChatFromList): void{
    this.chatsService.clickChat(chat.id);
    this.clickChatEvent.emit(chat);
  }
  public clickCreateButtonEventListener(): void{
    this.clickCreateButtonEvent.emit();
  }

  public isChatListEmpty(): boolean{
    return this.chatsService.chats.length === 0;
  }

}
