import { IPet } from "./interface/IPet";
import { IShow } from "./interface/IShow";

export abstract class Pet implements IPet {
    type: string;
    name: string;
    //Властивості лише для читання
    readonly color: string;
    readonly bday: Date;
    constructor(type: string, name: string, color: string, bday: Date, obj: IShow) {
        this.type = type;
        this.name = name;
        this.color = color;
        this.bday = bday;
        obj.show(this.type, this.name, this.color, this.age);
    }
    get age() {
        const diff = new Date(new Date().getTime() - this.bday.getTime());

        return diff.getFullYear() - new Date(0).getFullYear();
    }
}