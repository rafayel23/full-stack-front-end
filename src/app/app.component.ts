import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name: string;
  age: number;

  constructor(private http: HttpClient) {}

  getUsers() {
    this.http.get<User>('http://localhost:3000/users').subscribe(console.log);
  }

  addUser() {
    this.http.post<User>('http://localhost:3000/users', {
      name: this.name, age: +this.age
    }).subscribe(console.log);
  }
}
