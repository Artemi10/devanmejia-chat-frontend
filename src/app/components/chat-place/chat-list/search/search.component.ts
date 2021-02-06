import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ChatsService} from '../../../../services/chats/chats.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{
  public chatName = '';

  constructor(private chatsService: ChatsService) {
    this.chatsService.showChatByName(this.chatName);
    this.chatsService.addNewChatEvent
      .subscribe(() => {
        this.chatsService.showChatByName('');
        this.chatName = '';
      });
  }

  public changeChatNameListener(): void{
    this.chatsService.showChatByName(this.chatName);
  }


}
