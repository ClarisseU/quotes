import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote('Do not cry because it is over, smile because it happened','Watch finding Nemo', 'Dr. Seuss'),
    new Quote( 'Do not cry because it is over, smile because it happened','Watch finding Nemo', 'Dr. Seuss'),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuote(isComplete, index){
    if(isComplete){
      this.quotes.splice(index,1)
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
