import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Message} from '../../models/message.model';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  public messages: Message[] = [];
  public showNewMessagesEvent: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) { }

  public getMessagesByChatId(id: number): void{
    this.http.get(environment.url + `/api/messages/chat/${id}`)
      .subscribe((messages: Message[]) => {
        this.messages = messages;
        this.showNewMessagesEvent.next();
      });
  }

  public addNewMessage(message: Message): void{
    this.messages.push(message);
    this.showNewMessagesEvent.next();
  }

}
