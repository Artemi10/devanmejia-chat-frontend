import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SignUpComponent} from './components/authorization/sign-up/sign-up.component';
import {LogInComponent} from './components/authorization/log-in/log-in.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthHeaderInterceptor} from './services/authentication/auth-header.interceptor';
import {AuthErrorHandler} from './services/authentication/auth-error.handler';
import {APP_BASE_HREF} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavigationComponent } from './components/chat-place/navigation/navigation.component';
import { ChatPlaceComponent } from './components/chat-place/chat-place.component';
import { RouterModule } from '@angular/router';
import {CurrentChatComponent} from './components/chat-place/current-chat/current-chat.component';
import { MessageComponent } from './components/chat-place/current-chat/message/message.component';
import { FooterComponent } from './components/chat-place/footer/footer.component';
import { ChatHeaderComponent } from './components/chat-place/chat-header/chat-header.component';
import { ChatInformationComponent } from './components/chat-place/chat-information/chat-information.component';
import { ChatUserComponent } from './components/chat-place/chat-information/chat-user/chat-user.component';
import {CurrentUserProfileComponent} from './components/chat-place/profiles/current-user-profile/current-user-profile.component';
import {UserProfileComponent} from './components/chat-place/profiles/user-profile/user-profile.component';
import {ChatPanelComponent} from './components/chat-place/chat-list/chat-panel/chat-panel.component';
import {UserComponent} from './components/chat-place/create-chat-panel/user/user.component';
import {ChatListComponent} from './components/chat-place/chat-list/chat-list.component';
import {CreateChatPanelComponent} from './components/chat-place/create-chat-panel/create-chat-panel.component';
import {ChatComponent} from './components/chat-place/chat-list/chat/chat.component';
import {TextareaAutosizeModule} from 'ngx-textarea-autosize';
import {LogOutPanelComponent} from './components/chat-place/log-out-panel/log-out-panel.component';
import { UserListComponent } from './components/chat-place/user-list/user-list.component';




@NgModule({
    declarations: [
      AppComponent,
      LogInComponent,
      SignUpComponent,
      CurrentChatComponent,
      NavigationComponent,
      ChatPlaceComponent,
      CurrentChatComponent,
      MessageComponent,
      FooterComponent,
      CreateChatPanelComponent,
      ChatListComponent,
      ChatComponent,
      UserComponent,
      ChatPanelComponent,
      LogOutPanelComponent,
      CurrentUserProfileComponent,
      UserProfileComponent,
      ChatHeaderComponent,
      ChatInformationComponent,
      ChatUserComponent,
      UserListComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    TextareaAutosizeModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthHeaderInterceptor, multi: true},
    {provide: ErrorHandler, useClass: AuthErrorHandler},
    {provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
