import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

interface User {
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  signupForm: FormGroup;
  constructor(private http: HttpClient, private fb: FormBuilder) {}

  getUsers() {
    this.http.get<User>('http://localhost:3000/users')
    .subscribe(console.log, console.warn);
  }

  addUser() {
    this.http.post<User>('http://localhost:3000/users', this.signupForm.value)
    .subscribe(console.log, console.warn);
  }

  ngOnInit() {
    this.signupForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
    });
  }
}
