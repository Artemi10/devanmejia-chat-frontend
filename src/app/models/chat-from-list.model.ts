export class ChatFromList{
  public id: number;
  public chatName: string;
  public lastUserLogin: string;
  public lastMessage: string;
  public isClicked: boolean;
  public isShown: boolean;
  public read: boolean;

  constructor(chatName: string, lastUserLogin: string, lastMessage: string,
              id: number, isClicked: boolean, isShown: boolean, isRead: boolean) {
    this.id = id;
    this.chatName = chatName;
    this.lastUserLogin = lastUserLogin;
    this.lastMessage = lastMessage;
    this.isClicked = isClicked;
    this.isShown = isShown;
    this.read = isRead;
  }


}
