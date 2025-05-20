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
import { PetCollection } from './class/PetCollection';
import { ExampleSqr } from './class/ExampleSqr';
import { Person } from './class/Person';

import { ApiService } from './class/ApiService';
import { DataProcessor } from './class/DataProcessor';
import { User } from './class/user';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //Приклад з попередньої лекції. Приклад1
  ras_interface() {
    let show = new Show_console();

    let dog = new Dog('Собака', 'Рада', 'Рижа', new Date(2019, 4, 12), show);
    dog.run();
    dog.speak();
    dog.bringToy('Кістка');
    dog.guard();
    let cat = new Cat('Кішка', 'Мурка', 'Рижа', new Date(2017, 2, 2), show);
    cat.run();
    cat.speak();
    cat.bringMouse();
    let parrot = new Parrot(
      'Папуга',
      'Попка',
      'Зелений',
      new Date(1996, 2, 2),
      show
    );
    parrot.fly();
    parrot.speak();
    let fish = new Fish('Рибка', 'Дорі', 'Золота', new Date(2020, 2, 2), show);
    fish.swim();
  }
  //Приклад2
  logAndReturn<T>(arg: T): T {
    console.log(arg);
    return arg;
  }

  ras_generic1() {
    let result = this.logAndReturn('hello generics');
    let result1 = this.logAndReturn(25);
    let result2 = this.logAndReturn(Math.sin(2));
    let result3 = this.logAndReturn(true);
    let show = new Show_console();
    let parrot = new Parrot(
      'Папуга',
      'Попка',
      'Зелений',
      new Date(1996, 2, 2),
      show
    );
    let result4 = this.logAndReturn(parrot);
    let result5 = this.logAndReturn(show);
    let c = 25 + 3;
    let result6 = this.logAndReturn('Generic' + c);
    this.logAndReturn(33);
  }
  //Приклад3
  ras_generic2() {
    let show1 = new Show_file();
    let show = new Show_console();
    let collention: PetCollection<Pet> = new PetCollection();
    collention.add(
      new Fish('Рибка', 'Рада', 'Золота', new Date(2010, 4, 12), show1)
    );
    collention.add(
      new Dog('Собака', 'Рада2', 'Рижа', new Date(2019, 4, 12), show)
    );
    collention.add(
      new Cat('Кішка', 'Мурка', 'Рижа', new Date(2017, 2, 2), show)
    );
    let item = collention.getItemByName('Рада2');
    console.log(item);
    try {
      if (item as Dog) {
        let item1 = <Dog>item;
        if ('speak' in item1) item1.speak();
        if ('run' in item1) item1.run();
        // !Перевірка чи існує метод
        if ('guard' in item1) item1.guard();
      } else console.log('Це не собака');
    } catch {}
  }
  //Приклад4
  ras() {
    var x = new ExampleSqr();
    var y = x.sqr(5); //  "Call: foo(23) => 46"
    var z = x.add(3, 5);
    let a = x.dob(1, 2, 3);
    let xx = x.div(8, 4);
    let aa = [1, 2, 3, 6, 7];
    let aaa = x.add_mas(aa);
    console.log(y);
    console.log(z);
    console.log(a);
  }
  // Example 4.1
  calcTime() {
    let processor = new DataProcessor();
    processor.processData();
  }
  //Приклад 5
  ras_decorator() {
    // let m = new Module()
    let p = new Person('Ola');
    p.print();
  }
  //Приклад 5.1

  constructor() {}
  apiService = new ApiService();
  apiService1 = new ApiService();
  loadData() {
    this.apiService.fetchData();
    this.apiService.addData('testdata');
    this.apiService1.fetchData();
  }
  //Приклад 6
  username: string = '';
  user: User | null = null;
  errorMessage: string | null = null;

  onSubmit() {
    this.errorMessage = null;
    try {
      this.user = new User(this.username);
      console.log('Користувач створений:', this.user);
    } catch (error) {
      console.log('Помилка створення користувача');
    }
  }
  //Приклад 7
}
