import { Component, OnInit } from '@angular/core';
import { INewUser, IUser } from '../models/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  addNEwPostMode:boolean = false;
  selectedUserId: number | null = null;
  usersData: IUser[] = [ ];

  ngOnInit(): void {}

  onDeleteUser(id: number | null) {
    const indexIdToBeDeleted = this.usersData.findIndex(
      (user) => user.id === id
    );
    this.usersData.splice(indexIdToBeDeleted, 1);
  }

  showForm(){
    this.addNEwPostMode = !this.addNEwPostMode;
  }
  onSubmit(user: INewUser){
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
