import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(),
    lastname: new FormControl(),
    age: new FormControl(),
    email: new FormControl(),
    mobile: new FormControl(),
  });

  constructor() {}

  ngOnInit(): void {}

  get name() {
    return this.form.get('name') as FormControl;
  }

  get lastname() {
    return this.form.get('lastname') as FormControl;
  }

  get age() {
    return this.form.get('age') as FormControl;
  }

  get email() {
    return this.form.get('email') as FormControl;
  }

  get mobile() {
    return this.form.get('mobile') as FormControl;
  }
}
