export class User{
  public login: string;
  public firstName: string;
  public lastName: string;
  public imageUrl: string;
  public male: boolean;

  constructor(login: string, firstName: string, lastName: string, imageUrl: string, male: boolean) {
    this.login = login;
    this.firstName = firstName;
    this.lastName = lastName;
    this.imageUrl = imageUrl;
    this.male = male;
  }
}
