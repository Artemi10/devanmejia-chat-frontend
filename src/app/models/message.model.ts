import {User} from './user.model';

export class Message{
  public content: string;
  public user: User;
  public creationTime: Date;
}
