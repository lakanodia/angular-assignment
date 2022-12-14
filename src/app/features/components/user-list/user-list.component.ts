import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../models/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  isSelectedUser: boolean = false;
  @Input() users: IUser[] = [];
  @Input() selectedId: number | null;
  @Output() selectUserEvent = new EventEmitter<number>();
  @Output() deleteUserEvent = new EventEmitter<number | null>();
  @Output() edit = new EventEmitter<number>();
  @Output() fullInfo = new EventEmitter<number>();

  constructor(private activateRoute: ActivatedRoute) {
    console.log(this.activateRoute);
  }

  ngOnInit(): void {}

  selectUser(id: number) {
    this.selectUserEvent.emit(id);
    console.log(id);
  }

  deleteUser(id: number | null) {
    this.deleteUserEvent.emit(id);
  }

  editUser(id: number) {
    this.edit.emit(id);
  }

  getFullInfoUser(id: number) {
    this.fullInfo.emit(id);
  }
}
