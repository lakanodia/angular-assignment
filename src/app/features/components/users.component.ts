import { Component, OnInit } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { INewUser, IUser } from '../models/user.interface';
import { UsersHttpService } from '../services/users-http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  addNEwPostMode: boolean = false;
  selectedUserId: number | null = null;
  usersData: IUser[] = [];

  constructor(private usersHttp: UsersHttpService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.usersHttp.getUsers().subscribe((data) => {
      this.usersData = data;
    });
  }
  onDeleteUser(id: number | null) {
    const indexIdToBeDeleted = this.usersData.findIndex(
      (user) => user.id === id
    );

    this.usersHttp
      .deleteUser(id)
      .pipe(
        tap((data) => {
          this.usersData.splice(indexIdToBeDeleted, 1);
        }),
        catchError((err) => {
          alert('Error, Something Happend');
          return of(null);
        })
      )
      .subscribe();
  }

  showForm() {
    this.addNEwPostMode = !this.addNEwPostMode;
  }
  onSubmit(user: INewUser) {
    const newUser: IUser = {
      id: 4,
      name: user.name,
      lastName: user.lastName,
      age: user.age,
      email: user.email,
      mobile: user.mobile,
    };
    this.usersData.push(newUser);
  }
}
