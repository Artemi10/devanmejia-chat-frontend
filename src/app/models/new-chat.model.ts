import {User} from './user.model';

export class NewChat{
  public chatName: string;
  public users: User[];

  constructor(chatName: string, users: User[]) {
    this.chatName = chatName;
    this.users = users;
  }
}
