import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DojoMail';
  emails = [
    {email: 'bill@gates.com', important: true, subject: 'New Windows', content: 'Launching windows xp'},
    {email: 'linda@gates.com', important: true, subject: 'Re:New Windows', content: 'Perfect, absolutely love it!'},
    {email: 'peter@parker.com', important: false, subject: 'Spiders!', content: 'I am a spider, pewpewpew spiderman!'},
    {email: 'nick@gmail.com', important: true, subject: 'Coding Dojo', content: 'almost done with the coding dojo!'},
    
  ]
}
