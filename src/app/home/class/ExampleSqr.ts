import { log } from '../Decorator/log';

export class ExampleSqr {
  @log
  sqr(n: number) {
    return n * n;
  }
  @log
  add(a: number, b: number) {
    return a + b;
  }
  @log
  dob(a: number, b: number, c: number) {
    return a * b * c;
  }
  @log
  div(a: number, b: number) {
    return a / b;
  }
  @log
  add_mas(a: number[]) {
    let i = 0;
    let s = 0;
    for (i = 0; i < a.length; i++) {
      s = s + a[i];
    }
    return s / (a.length - 1);
  }
}
