import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor() { }
  upvote = 0;
  downvote =0;
   quoteUpvote(){
     this.upvote++;
   }
   quoteDownvote(){
     this.downvote++;
   }

  ngOnInit() {
  }

}
