import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {User} from '../../../../models/user.model';

@Component({
  selector: 'app-chat-user',
  templateUrl: './chat-user.component.html',
  styleUrls: ['./chat-user.component.css']
})
export class ChatUserComponent implements OnInit {
  @Input() user: User;
  @Input() isAdmin: boolean;
  @Input() showDeleteButton: boolean;
  @Output() deleteUserFromChatEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    if (!this.user.imageUrl){
      this.user.imageUrl = this.user.male ? './assets/images/avatar/male.png' : './assets/images/avatar/female.png';
    }
  }

  public clickDeleteButtonListener(): void{
    this.deleteUserFromChatEvent.emit(this.user);
  }
}
