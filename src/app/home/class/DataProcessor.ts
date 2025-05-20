import { MeasureTime } from '../Decorator/measureTime';

export class DataProcessor {
  constructor() {}

  @MeasureTime
  processData() {
    console.log('Обробка даних...');
    for (let i = 0; i < 1e7; i++) {} // Симуляція навантаження
    console.log('Дані оброблено!');
  }
}
