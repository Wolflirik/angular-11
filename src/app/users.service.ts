import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TablePage } from '../app/tablePage';
import { User } from '../app/model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(
    private HttpClient: HttpClient
  ) { }

  public getUsers(page: number, rowsPerPage: number): Observable<TablePage> {
    let users = this.HttpClient.get<User[]>('api/users');
    return this.getPageItems(users, page, rowsPerPage);
  }

  private getPageItems(users: Observable<Array<User>>, page: number, rowsPerPage: number): Observable<TablePage> {

    return users.pipe(
      map(u => {
        let startIndex = rowsPerPage * (page -1);
        return new TablePage(u.length, u.slice(startIndex, startIndex + rowsPerPage));
      })
    );
  }

  public addUser(user: User): Observable<User> {
    console.log(user);
    
    return this.HttpClient.post<User>('api/users', user);
  }

  public getUser(userId: number): Observable<User> {
    return this.HttpClient.get<User>(`api/users/${userId}`);
  }

  public removeUser(userId: number): Observable<User> {
    return this.HttpClient.delete<User>(`api/users/${userId}`);
  }

  public updateUser(userId: number, user: User): Observable<User> {
    return this.HttpClient.put<User>(`api/users/${userId}`, user);
  }
}
