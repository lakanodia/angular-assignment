import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
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
  constructor() {}

  ngOnInit(): void {}
}