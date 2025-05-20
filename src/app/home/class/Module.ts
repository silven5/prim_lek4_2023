import { myFirstDecorator } from '../Decorator/myFirstDecorator';

@myFirstDecorator
export class Module {
  name: string = '';
  age: number = 0;
}
