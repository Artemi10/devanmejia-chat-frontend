import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {MessagesService} from '../../../services/messages/messages.service';


@Component({
  selector: 'app-current-chat',
  templateUrl: './current-chat.component.html',
  styleUrls: ['./current-chat.component.css']
})
export class CurrentChatComponent implements AfterViewInit{
  @ViewChild('chatElement') public chatElement: ElementRef;

  constructor(public messageService: MessagesService) {
    messageService.showNewMessagesEvent
      .subscribe(() => this.scrollChat());
  }

  ngAfterViewInit(): void {
    this.scrollChat();
  }

  private scrollChat(): void{
    this.chatElement.nativeElement.scrollTop =
      this.chatElement.nativeElement.scrollHeight;
  }

  public isMessageListEmpty(): boolean{
    return this.messageService.messages.length === 0;
  }
}
