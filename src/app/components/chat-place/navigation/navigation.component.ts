import {Component, EventEmitter, Output} from '@angular/core';
import {CurrentUserService} from '../../../services/current-user/current-user.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent  {
  @Output() public clickCreateChatButton = new EventEmitter();

  constructor(public currentUserService: CurrentUserService) {}
}
