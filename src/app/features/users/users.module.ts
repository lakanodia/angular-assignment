import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from '../components/user-list/user-list.component';
import { UsersComponent } from '../components/users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FormComponent } from '../components/form/form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [UsersComponent, UserListComponent, FormComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, HttpClientModule],

  exports: [UsersComponent],
})
export class UsersModule {}
