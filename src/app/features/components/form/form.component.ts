import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl('', [Validators.required, Validators.min(1), Validators.max(99)]),
    email: new FormControl(),
    mobile: new FormControl('', [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {
    console.log(this.form.valid);
  }

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
