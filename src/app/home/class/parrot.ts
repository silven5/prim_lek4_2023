import { IFly } from "./interface/IFly";
import { ISpeak } from "./interface/ISpeak";
import { Pet } from "./pet";

export class Parrot extends Pet implements IFly, ISpeak {

    speak() {
        console.log("Попка дурак");
    }


    fly() {
        console.log("Я вмію літати");
    }
}