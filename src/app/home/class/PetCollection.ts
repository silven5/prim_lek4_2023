import { IPet } from './interface/IPet';

export class PetCollection<T extends IPet> {
  private itemAll: T[] = [];

  public add(item: T): void {
    this.itemAll.push(item);
  }
  public getItemByName(name: string): T | undefined {
    return this.itemAll.find((item) => item.name === name); // Ok
  }
}
