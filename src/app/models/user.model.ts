export class User{
  public login: string;
  public firstName: string;
  public lastName: string;

  constructor(login: string, firstName: string, lastName: string) {
    this.login = login;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
