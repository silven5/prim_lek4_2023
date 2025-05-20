export function log(target: Object, key: string, value: any) {
  return {
    value: function (...args: any[]) {
      // конвертуємо список аргументів, що передані у метод , в рядок
      let a = args.map((a) => JSON.stringify(a)).join();
      // викликаємо функцію та отримуємо її результат
      let result = value.value.apply(this, args);
      // let result = 0;
      // let result = value.value;
      // переводимо результат у рядок
      let r = JSON.stringify(result);
      // Відображаємо результат виклику у консолі
      console.log(`Call: ${key}(${a}) => ${r}`);
      // повертаємо результат виконання
      return result;
    },
  };
}
