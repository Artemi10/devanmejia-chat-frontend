import {Component, Input} from '@angular/core';
import {Message} from '../../../../models/message.model';
import {AuthenticationService} from '../../../../services/authentication/authentication.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  @Input() public message: Message;

  constructor(public authenticationService: AuthenticationService) { }

  public isCurrentUserLogin(): boolean{
    return this.message.user.login === this.authenticationService.getUserName();
  }

}
