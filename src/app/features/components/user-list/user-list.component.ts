import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {}

  selectUser(id: number) {
    this.selectUserEvent.emit(id);
    console.log(id);
  }
}
