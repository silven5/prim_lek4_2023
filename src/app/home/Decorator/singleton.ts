// Декоратор Singleton, який гарантує, що клас матиме лише один екземпляр
export function Singleton<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  let instance: any; // Змінна для збереження єдиного екземпляра класу

  return class extends constructor {
    constructor(...args: any[]) {
      if (!instance) {
        super(...args); // Викликаємо конструктор оригінального класу
        instance = this; // Зберігаємо створений екземпляр
      }
      return instance; // Повертаємо вже існуючий екземпляр
    }
  };
}
