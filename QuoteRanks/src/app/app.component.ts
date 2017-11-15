import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    {body: 'This is a first quote, It is so inspiring, blah blah blah', author: 'Nick Madani', rating: 25},
    {body: 'To be, or not to be, that is the question', author: 'Some Dude', rating: 23},
    {body: 'I chose the road less traveled, and it has made all the difference', author: 'Robert Frost', rating: 21}
  ];

  createQuote(quote){
    console.log(quote);
    this.quotes.push(quote);
  }

  deleteQuote(quote){
    const idx = this.quotes.indexOf(quote);
    this.quotes.splice(idx, 1);
  }
}
