import {Component, Output, EventEmitter, Input} from '@angular/core';
import {ChatFromList} from '../../../models/chat-from-list.model';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.css']
})
export class ChatHeaderComponent {
  @Input() public chat: ChatFromList;
  @Output() public clickChatInformationButtonEvent = new EventEmitter();
  @Output() public clickAddUserButtonEvent = new EventEmitter();

  constructor() { }

  public clickChatInformationButtonListener(): void{
    this.clickChatInformationButtonEvent.emit();
  }
  public clickAddUserButtonListener(): void{
    this.clickAddUserButtonEvent.emit();
  }

}
