import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'app';
  x: number = 7;
  y: number = 9;
  z: number = 1.23;
  myStr: string = 'abc';
  user = {
    firstName: 'Darth',
    lastName: 'Vader'
  }
}
