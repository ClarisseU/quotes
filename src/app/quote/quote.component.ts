import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote('Do not cry because it is over, smile because it happened','Watch finding Nemo', 'Dr. Seuss',new Date(2019,3,14)),
    new Quote( 'The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.','Watch finding Nemo', 'Mark Caine',new Date(2019,3,14)),
  ];
  //function to show details
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  //function to delete a quote
  completeQuote(isComplete, index){
    if(isComplete){
      this.quotes.splice(index,1)
    }
  }
  //function of the button that add a new quote
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit() {
  }

}
