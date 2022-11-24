import { Component, OnInit } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { INewUser, IUser } from '../models/user.interface';
import { HeaderService, Language } from '../services/header.service';
import { UsersHttpService } from '../services/users-http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  addNewUserMode: boolean = false;
  chosenUserToEdit: IUser | null = null;
  selectedUserId: number | null = null;
  chosenUSerForFullDetails: IUser | null;
  usersData: IUser[] = [];
  changeLanguage$ = this.headerService.chosenLanguage$;

  constructor(
    private usersHttp: UsersHttpService,
    private headerService: HeaderService
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.usersHttp.getUsers().subscribe((data) => {
      this.usersData = data;
      this.headerService.userCount = data.length;
    });
  }

  onEdit(id: number) {
    this.chosenUserToEdit = this.usersData.find(
      (user: IUser) => user.id === id
    ) as IUser;
  }

  updateUser(user: IUser) {
    this.usersHttp.updateUser(user).subscribe((data) => {
      console.log(data);
      this.chosenUserToEdit = null;
      this.getAllUsers();
    });
  }

  addNewUser(user: INewUser) {
    this.usersHttp.addUser(user).subscribe((data) => {
      this.usersData.push(data);
      console.log(data);
      this.headerService.userCount = this.headerService.userCount + 1;
    });
  }

  onGetUserInfo(id: number) {
    this.usersHttp.getOneUser(id).subscribe((data) => {
      this.chosenUSerForFullDetails = data;
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
          this.headerService.userCount = this.headerService.userCount - 1;
        }),
        catchError((err) => {
          alert('Error, Something Happend');
          return of(null);
        })
      )
      .subscribe();
  }

  showForm() {
    this.addNewUserMode = !this.addNewUserMode;
  }

  onSubmit(user: INewUser | IUser) {
    if (!(user as IUser).id) {
      const newUser = {
        name: user.name,
        lastname: user.lastname,
        age: user.age,
        email: user.email,
        mobile: user.mobile,
      } as INewUser;
      this.addNewUser(user);
      this.addNewUserMode = false;
      // this.usersData.push(newUser);
    } else {
      // this.usersData[indexToReplace] = user as IUser;
      // this.updateUser(user as IUser);
      // this.chosenUserToEdit = null;
      this.updateUser(user as IUser);
    }
  }

  get language(): Language {
    return 'en';
    // return this.headerService.chosenLanguage;
  }
}
