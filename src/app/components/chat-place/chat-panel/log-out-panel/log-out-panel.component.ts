import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../../services/authentication/authentication.service';

@Component({
  selector: 'app-log-out-panel',
  templateUrl: './log-out-panel.component.html',
  styleUrls: ['./log-out-panel.component.css']
})
export class LogOutPanelComponent {

  constructor(private authenticationService: AuthenticationService) { }

  public logOut(): void{
    this.authenticationService.deleteToken();
    window.location.replace('/logIn');
  }

}
