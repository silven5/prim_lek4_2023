export interface IPet {
    name: string;
    //Властивості лише для читання
    readonly age?: number;
    readonly color: string;
    readonly bday: Date;
};