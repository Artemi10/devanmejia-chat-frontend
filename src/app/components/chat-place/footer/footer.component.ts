import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {SentMessage} from '../../../models/sent-message.model';
import {AuthenticationService} from '../../../services/authentication/authentication.service';
import {environment} from '../../../../environments/environment';
declare var SockJS;
declare var Stomp;



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy{
  @Input() public currentChatId: number;
  public messageContent = '';
  private stompClient;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.stompClient = Stomp.over(new SockJS(environment.url + '/ws'));
  }
  ngOnDestroy(): void {
    this.stompClient.disconnect();
  }

  public clickSendButtonListener(): void{
    const newMessage: SentMessage
      = new SentMessage(this.currentChatId, this.messageContent, this.authenticationService.getUserName());
    this.sendMessage(newMessage);
    this.messageContent = '';
  }
  public clickAddFileButtonListener(): void{
    // TODO
  }

  private sendMessage(sentMessage: SentMessage): void{
    this.stompClient.send('/app/chat', {}, JSON.stringify(sentMessage));
  }

}
