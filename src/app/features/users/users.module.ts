import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from '../components/user-list/user-list.component';
import { UsersComponent } from '../components/users.component';

@NgModule({
  declarations: [UsersComponent, UserListComponent],
  imports: [CommonModule],
  exports: [UsersComponent],
})
export class UsersModule {}
