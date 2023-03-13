import { IRun } from "./interface/IRun";
import { ISpeak } from "./interface/ISpeak";
import { IToy } from "./interface/IToy";
import { Pet } from "./pet";

export class Dog extends Pet implements IRun, IToy, ISpeak {


    speak() {
        console.log("Гав-гав");
    }

    run() {
        console.log("Бігу зі швидкістю 10 км/ч");
        return "V=10";
    }
    bringToy(toy: string) {
        console.log("Моя улюблена іграшка " + toy);
    }
    guard() {
        console.log("Вмію охраняти помешкання");
    }
}