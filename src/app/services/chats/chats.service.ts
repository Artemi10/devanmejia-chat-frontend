import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NewChat} from '../../models/new-chat.model';
import {environment} from '../../../environments/environment';
import {ChatFromList} from '../../models/chat-from-list.model';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {
  public chats: ChatFromList[] = [];
  public addNewChatEvent: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) {}

  public getChats(): void{
    this.http.get(environment.url + '/api/chats/user')
      .subscribe((chats: ChatFromList[]) => {
        this.chats = chats.reverse();
        this.chats.forEach((chat: ChatFromList) => chat.isShown = true);
      });
  }

  public updateChat(chat: ChatFromList): void{
    this.http.put(environment.url + '/api/chat', chat).subscribe();
  }

  public createChat(chat: NewChat): Observable<any>{
    return this.http.post(environment.url + '/api/chat', chat)
      .pipe(map((id: number) => {
        this.addNewChat(new ChatFromList(chat.chatName, '', '', id, false, true, true));
        return id;
      }));
  }

  private addNewChat(newChat: ChatFromList): void{
    this.chats.push(newChat);
    this.clickChat(newChat.id);
    this.addNewChatEvent.next();
  }

  public clickChat(id: number): void{
    this.chats.forEach((chat) => chat.isClicked = chat.id === id);
  }

  public putChatOnTop(chatId: number): void{
    for (let i = 0; i < this.chats.length; i++){
      if (this.chats[i].id === chatId){
        if (i === 0){
          break;
        }
        const chat: ChatFromList[] = this.chats.splice(i, 1);
        this.chats.unshift(chat[0]);
        break;
      }
    }
  }

  public showChatByName(chatName: string): void{
    this.chats.forEach((chat: ChatFromList) => chat.isShown = chat.chatName.toLowerCase().startsWith(chatName.toLowerCase()));
  }
}
