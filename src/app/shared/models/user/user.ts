export class User {
  name: string;
  email: string;
  token: string;

  constructor(obj: User | any = {}) {
    this.name = obj.name || '';
    this.email = obj.email || '';
    this.token = obj.token || '';
  }
}
