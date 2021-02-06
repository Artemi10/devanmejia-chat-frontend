import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LogInComponent} from "./components/authorization/log-in/log-in.component";
import {SignUpComponent} from "./components/authorization/sign-up/sign-up.component";
import {AuthorizationGuard} from "./guards/authorization/authorization.guard";
import {ChatPlaceComponent} from "./components/chat-place/chat-place.component";
import {AuthenticationGuard} from "./guards/authentication/authentication.guard";



const routes: Routes = [
  {path:'logIn', component:LogInComponent, canActivate:[AuthorizationGuard]},
  {path:'signUp', component:SignUpComponent,canActivate:[AuthorizationGuard]},
  {path:'chat', component:ChatPlaceComponent,canActivate:[AuthenticationGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
