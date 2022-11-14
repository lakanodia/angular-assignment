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
  usersData: IUser[] = [
    {
      id: 1,
      age: 23,
      email: 'email@gmail,com',
      mobile: '588779966',
      name: 'John',
      lastName: 'Doe',
    },
    {
      id: 2,
      age: 21,
      email: 'email@gmail,com',
      mobile: '577889966',
      name: 'Kate',
      lastName: 'Meyer',
    },
    {
      id: 3,
      age: 29,
      email: 'email@gmail,com',
      mobile: '548779966',
      name: 'Anna',
      lastName: 'Lopes',
    },
  ];

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
