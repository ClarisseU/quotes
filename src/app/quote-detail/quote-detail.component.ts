import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  deleteQuote(complete:boolean){
    this.isComplete.emit(complete);
  }
  upvote = 0;
  downvote =0;
   quoteUpvote(){
     this.upvote++;
   }
   quoteDownvote(){
     this.downvote++;
   }

  constructor() { }

  ngOnInit() {
  }

}
