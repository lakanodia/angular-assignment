import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from '../components/user-list/user-list.component';
import { UsersComponent } from '../components/users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersComponent, UserListComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],

  exports: [UsersComponent],
})
export class UsersModule {}
