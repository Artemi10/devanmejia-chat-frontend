import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../../../../models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  @Input() public user: User;
  @Output() public clickCloseIconEvent = new EventEmitter();

  constructor() { }

  public clickCloseIconListener(): void{
    this.clickCloseIconEvent.emit();
  }

}
