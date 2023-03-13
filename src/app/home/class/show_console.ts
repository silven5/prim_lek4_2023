import { IShow } from "./interface/IShow";

export class Show_console implements IShow {
    show(type: string, name: string, color: string, age: number) {
        console.log("Я " + type + " на ім'я " + name);
        console.log("Мій кольор  " + color);
        console.log("Мій вік " + age + " років");
    }
}