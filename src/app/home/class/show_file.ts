import { IShow } from "./interface/IShow";

export class Show_file implements IShow {
    show(type: string, name: string, color: string, age: number) {
        alert("Я " + type + " на ім'я " + name);
        alert("Мій кольор  " + color);
        alert("Мій вік " + age + " років");
    }
}