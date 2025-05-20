import { logClass } from '../Decorator/logClass';

@logClass
export class Person {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  print(): void {
    console.log(this.name);
  }
}
