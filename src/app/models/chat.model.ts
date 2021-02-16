import {User} from './user.model';

export class Chat{
  public chatName: string;
  public users: User[];
  public imageUrl: string;
  public adminUser: User;
}
