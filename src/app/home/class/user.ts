import { MinLength } from '../Decorator/minLength';

export class User {
  @MinLength(5)
  username: string;

  constructor(username: string) {
    this.username = username;
  }
}
