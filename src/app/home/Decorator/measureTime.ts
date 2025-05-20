export function MeasureTime(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value; // Зберігаємо оригінальний метод

  descriptor.value = function (...args: any[]) {
    const start = performance.now(); // Початковий час
    const result = originalMethod.apply(this, args); // Викликаємо оригінальний метод
    const end = performance.now(); // Кінцевий час

    console.log(
      `Метод ${propertyKey} виконався за ${(end - start).toFixed(2)} мс`
    );
    return result;
  };
}
