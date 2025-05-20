// Тип декоратора - функція
// Вхідний параметр target - конструктор
export function logClass<TFunction extends Function>(
  target: TFunction
): TFunction {
  // створюємо новий конструктор
  let newConstructor: Function = function (this: any, name: string) {
    // Виводимо повідомлення про новий конструктор
    console.log('Creating new instance');
    // залишаємо ім'я яке було
    this.name = name;
    // установлюємо нову властивість вік
    this.age = 23;
    // установлюємо новий метод print
    this.print = function (): void {
      console.log(this.name, this.age);
    };
  };
  return <TFunction>newConstructor;
}
