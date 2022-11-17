import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersHttpService {
  backendUrl = 'http://localhost:3000/users';
  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get<IUser[]>(this.backendUrl);
  }

  deleteUser(id: number | null) {
    return this.httpClient.delete(`${this.backendUrl}/${id}`);
  }
}
