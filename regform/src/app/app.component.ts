import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';
  user = new User();

  message = [];

  onSubmit(){
  	console.log('function is working');

  	this.message.push(this.user.f_name),
  	this.message.push(this.user.email),
  	this.message.push(this.user.address),

  	this.user = new User();
  }
}