import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const users = new Array<User> (
      { id: 1, name: 'Иван', surname: 'Иванов', email: 'asf@mail.ru', telephone: '+38 (099)-212-12-32'},
      { id: 2, name: 'Петр', surname: 'Петров', email: 'jiiiio@yandex.ua', telephone: '+38 (021)-212-97-01'},
      { id: 3, name: 'Григорий', surname: 'Сидоров', email: 'loki2020@mail.ru', telephone: '+38 (111)-193-23-56'},
      { id: 4, name: 'Юлия', surname: 'Коган', email: 'mann777@goole.com', telephone: '+38 (123)-820-02-80'},
      { id: 5, name: 'Влад', surname: 'Юнга', email: '20ii20@yandex.ru', telephone: '+38 (331)-234-92-01'},
      { id: 6, name: 'Сергей', surname: 'Валуев', email: 'kitos67@mail.ru', telephone: '+38 (142)-170-10-32'},
      { id: 7, name: 'Алексей', surname: 'Пиков', email: 'lex78@gmail.com', telephone: '+38 (125)-109-09-21'},
    );

    return { users };
  }

  genId(users: Array<User>): number {
    return users.length > 0 ? Math.max(...users.map(users => users.id)) + 1 : 1;
  }

  constructor() { }
}
