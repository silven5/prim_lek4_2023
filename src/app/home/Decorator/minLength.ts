export function MinLength(min: number) {
  return function (target: any, propertyKey: string) {
    let value: string;
    Object.defineProperty(target, propertyKey, {
      get: () => value,
      set: (newValue: string) => {
        if (newValue.length < min) {
          throw new Error(
            `Помилка: значення "${propertyKey}" повинно містити щонайменше ${min} символів.`
          );
        }
        value = newValue;
      },
      enumerable: true,
      configurable: true,
    });
  };
}
