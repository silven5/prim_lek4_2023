import { Singleton } from '../Decorator/singleton';

@Singleton
export class ApiService {
  private data: string[] = [];

  constructor() {
    console.log('API Service створено');
  }

  fetchData() {
    console.log('Отримання даних...');
    this.data = ['Дані 1', 'Дані 2', 'Дані 3'];
  }
  addData(data: string) {
    this.data.push(data);
    console.log('Add data');
    console.log(this.data);
  }
  showData() {
    let s: string = '';
    this.data.forEach((item) => (s += item));
    return s;
  }
  getData() {
    return this.data;
  }
}
