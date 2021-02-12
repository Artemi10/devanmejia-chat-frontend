import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ChatFromList} from '../../../../models/chat-from-list.model';
import {environment} from '../../../../../environments/environment';
import {Message} from '../../../../models/message.model';
import {MessagesService} from '../../../../services/messages/messages.service';
import {ChatsService} from '../../../../services/chats/chats.service';
import {AuthenticationService} from '../../../../services/authentication/authentication.service';

declare var SockJS;
declare var Stomp;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnDestroy, OnInit {
  @Input() public chat: ChatFromList;
  @Output() public clickChatEvent = new EventEmitter();
  private stompClient;

  constructor(private messagesService: MessagesService, private chatsService: ChatsService,
              private authenticationService: AuthenticationService) {
    this.initializeMessageWebSocketConnection();
  }

  ngOnInit(): void {
    this.chat.imageUrl = this.getImage();
  }

  ngOnDestroy(): void {
    this.stompClient.disconnect();
  }

  public clickChatEventListener(): void{
    this.clickChatEvent.emit(this.chat.id);
    this.chat.read = true;
    this.chatsService.updateChat(this.chat);
  }

  public isLastMessageReceived(): boolean{
    const userName: string = this.authenticationService.getUserName();
    if (this.messagesService.messages.length === 0){
      return this.chat.lastUserLogin !== userName;
    }
    else{
      const lastMessage = this.messagesService.messages[this.messagesService.messages.length - 1];
      return lastMessage.user.login !== userName;
    }
  }

  public isChatEmpty(): boolean{
    return this.chat.lastUserLogin === '';
  }

  public getImage(): string{
    return this.chat.imageUrl === null ? './assets/images/avatar/chat.jpg'
      : this.chat.imageUrl;
  }

  private initializeMessageWebSocketConnection(): void{
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
        }
        else{
          that.chat.read = false;
        }
        that.chatsService.updateChat(that.chat);
      });
    });
  }
}
