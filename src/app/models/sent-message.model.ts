export class SentMessage{
  public chatId: number;
  public content: string
  public login: string;

  constructor(chatId: number, content: string, login: string) {
    this.chatId = chatId;
    this.content = content;
    this.login = login;
  }
}
