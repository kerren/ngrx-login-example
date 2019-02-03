import {deserialize} from 'class-transformer';

export class User {
  name: string;
  email: string;
  token: string;

  constructor(obj: User | any = {}) {
    return deserialize(User, Object.assign({}, obj, {
      name: '',
      email: '',
      token: ''
    }));
  }
}
