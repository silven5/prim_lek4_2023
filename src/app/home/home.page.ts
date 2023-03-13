import { Component } from '@angular/core';
import 'reflect-metadata';
import { range } from 'rxjs';
import { IPet } from './class/interface/IPet';
import { Show_console } from './class/show_console';
import { Show_file } from './class/show_file';
import { Dog } from './class/dog';
import { Cat } from './class/cat';
import { Parrot } from './class/parrot';
import { Fish } from './class/fish';
import { Pet } from './class/pet';
const formatMetadataKey = Symbol("format");
const requiredMetadataKey = Symbol("required");
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //Приклад з попередньої лекції. Приклад1
  ras_interface() {
    let show = new Show_console();

    let dog = new Dog("Собака", "Рада", "Рижа", new Date(2019, 4, 12), show);
    dog.run();
    dog.speak();
    dog.bringToy("Кістка");
    dog.guard();
    let cat = new Cat("Кішка", "Мурка", "Рижа", new Date(2017, 2, 2), show);
    cat.run();
    cat.speak();
    cat.bringMouse();
    let parrot = new Parrot("Папуга", "Попка", "Зелений", new Date(1996, 2, 2), show);
    parrot.fly();
    parrot.speak();
    let fish = new Fish("Рибка", "Дорі", "Золота", new Date(2020, 2, 2), show);
    fish.swim();
  }
  //Приклад2
  logAndReturn<T>(arg: T): T {
    console.log(arg);
    return arg;
  }

  ras_generic1() {
    let result = this.logAndReturn("hello generics");
    let result1 = this.logAndReturn(25);
    let result2 = this.logAndReturn(Math.sin(2));
    let result3 = this.logAndReturn(true);
    let show = new Show_console();
    let parrot = new Parrot("Папуга", "Попка", "Зелений", new Date(1996, 2, 2), show);
    let result4 = this.logAndReturn(parrot);
    let result5 = this.logAndReturn(show);
    let c = 25 + 3;
    let result6 = this.logAndReturn("Generic" + c);
    this.logAndReturn(33);
  }
  //Приклад3
  ras_generic2() {
    let show1 = new Show_file();
    let show = new Show_console();
    let collention: PetCollection<Pet> = new PetCollection();
    collention.add(new Fish("Рибка", "Рада", "Золота", new Date(2010, 4, 12), show1))
    collention.add(new Dog("Собака", "Рада2", "Рижа", new Date(2019, 4, 12), show));
    collention.add(new Cat("Кішка", "Мурка", "Рижа", new Date(2017, 2, 2), show));
    let item = collention.getItemByName("Рада");
    console.log(item);
    try {
      if (item as Dog) {
        let item1 = <Dog>item;
        if ('speak' in item1)
          item1.speak();
        if ('run' in item1)
          item1.run();
        // !Перевірка чи існує метод
        if ('guard' in item1)
          item1.guard;
      }
      else
        console.log("Це не собака")
    }
    catch
    {

    }
  }
  //Приклад4
  ras() {

    var x = new ExampleSqr();
    var y = x.sqr(5); //  "Call: foo(23) => 46"
    var z = x.add(3, 5);
    let a = x.dob(1, 2, 3);
    console.log(y);
    console.log(z);
    console.log(a);
  }
  //Приклад 5
  ras_decorator() {

    // let m = new Module()
    let p = new Person("Ola");
    p.print();
  }
  //Приклад 6
  ras_decorator_property() {
    let g = new Greeter("Олена");
    console.log(g.greet());
  }

  constructor() { }


}
//Приклад3
class PetCollection<T extends IPet> {
  private itemAll: T[] = [];

  public add(item: T): void {
    this.itemAll.push(item);
  }
  public getItemByName(name: string): T | undefined {
    return this.itemAll.find(item => item.name === name); // Ok
  }
}
//Приклад4
class ExampleSqr {
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
}
function log(target: Object, key: string, value: any) {
  return {
    value: function (...args: any[]) {
      // конвертуємо список аргументів, що передані у метод sqr, в рядок
      var a = args.map(a => JSON.stringify(a)).join();
      // викликаємо sqr() та отримуємо його результат
      var result = value.value.apply(this, args);
      // переводимо результат у рядок
      var r = JSON.stringify(result);
      // Відображаємо результат виклику у консолі
      console.log(`Call: ${key}(${a}) => ${r}`);
      // повертаємо результат виконання sqr
      return result;
    }
  };
}
//Приклад5
@logClass
class Person {
  public name: string;
  constructor(name: string) {
    this.name = name;

  }
  print(): void {
    console.log(this.name);
  }
}
// Тип декоратора - функція
// Вхідний параметр target - конструктор
function logClass<TFunction extends Function>(target: TFunction): TFunction {
  // створюємо новий конструктор
  let newConstructor: Function = function (this: any, name: string) {
    // Виводимо повідомлення про новий конструктор
    console.log("Creating new instance");
    // залишаємо ім'я яке було
    this.name = name;
    // установлюємо нову властивість вік
    this.age = 23;
    // пустановлюємо новий метод print
    this.print = function (): void {
      console.log(this.name, this.age);
    }
  }
  return <TFunction>newConstructor;
}


//Приклад6
class Greeter {
  @format("Привіт, %s")
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    let formatString = getFormat(this, "greeting");
    return formatString.replace("%s", this.greeting);
  }
}
/**
 Декоратор @format ("Привіт,% s") - це фабрика декораторів.
 Коли викликається @format ("Привіт,% s"), він додає запис метаданих для властивості
 за допомогою функції Reflect.metadata з бібліотеки reflect-metadata.
 Коли викликається getFormat, він читає значення метаданих для формату.
 */
function format(formatString: string) {
  return Reflect.metadata(formatMetadataKey, formatString);
}
function getFormat(target: any, propertyKey: string) {
  return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}
//Приклад5
function myFirstDecorator(constructor: Function) {
  console.log(constructor);
}

@myFirstDecorator
class Module {
  name: string = "";
  age: number = 0;
}

