import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  public getChatById(id: number): Promise<any>{
    return this.http.get(environment.url + `/api/chat/${id}`).toPromise();
  }
}
