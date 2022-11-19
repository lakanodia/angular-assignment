import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INewUser, IUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersHttpService {
  backendUrl = 'http://localhost:3000/users';
  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get<IUser[]>(this.backendUrl);
  }

  getOneUser(id: number) {
    return this.httpClient.get<IUser>(`${this.backendUrl}/${id}`);
  }

  deleteUser(id: number | null) {
    return this.httpClient.delete(`${this.backendUrl}/${id}`);
  }

  addUser(user: INewUser) {
    return this.httpClient.post<IUser>(this.backendUrl, user);
  }

  updateUser(user: IUser) {
    return this.httpClient.put<IUser>(`${this.backendUrl}/${user.id}`, user);
  }
}
