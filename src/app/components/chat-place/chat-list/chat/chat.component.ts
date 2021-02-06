import {Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {ChatFromList} from '../../../../models/chat-from-list.model';
import {environment} from '../../../../../environments/environment';
import {Message} from '../../../../models/message.model';
import {MessagesService} from '../../../../services/messages/messages.service';
import {ChatsService} from '../../../../services/chats/chats.service';
declare var SockJS;
declare var Stomp;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnDestroy {
  @Input() public chat: ChatFromList;
  @Output() public clickChatEvent = new EventEmitter();
  private stompClient;
  public hasNewMessages: boolean;

  constructor(private messagesService: MessagesService, private chatsService: ChatsService) {
    this.initializeWebSocketConnection();
    this.hasNewMessages = false;
  }

  ngOnDestroy(): void {
    this.stompClient.disconnect();
  }

  public clickChatEventListener(): void{
    this.clickChatEvent.emit(this.chat.id);
    this.hasNewMessages = false;
    this.chat.read = true;
    this.chatsService.updateChat(this.chat);
  }

  public isChatEmpty(): boolean{
    return this.chat.lastUserLogin === '';
  }

  private initializeWebSocketConnection(): void{
    this.stompClient = Stomp.over(new SockJS(environment.url + '/ws'));
    const that = this;
    return this.stompClient.connect({}, function(): void {
      this.subscribe('/messages/' + that.chat.id, (message) => {
        const newMessage: Message = JSON.parse(message.body);
        that.chat.lastMessage = newMessage.content;
        that.chat.lastUserLogin = newMessage.user.login;
        that.chatsService.putChatOnTop(that.chat.id);
        if (that.chat.isClicked){
          that.chat.read = true;
          that.messagesService.addNewMessage(newMessage);
        }else{
          that.chat.read = false;
          that.hasNewMessages = true;
        }
        that.chatsService.updateChat(that.chat);
      });
    });
  }


}
