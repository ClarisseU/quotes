import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    {quote:'Do not cry because it is over, smile because it happened.', name:'Watch finding Nemo',author:'Dr. Seuss'},
    {quote:'Do not cry because it is over, smile because it happened.', name:'Watch finding Nemo',author:'Dr. Seuss'},
  ];
  constructor() { }

  ngOnInit() {
  }

}