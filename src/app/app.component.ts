import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    {quote:'Do not cry because it is over, smile because it happened.', name:'Watch finding Nemo',author:'Dr. Seuss'},
    {quote:'Do not cry because it is over, smile because it happened.', name:'Watch finding Nemo',author:'Dr. Seuss'},
  ];
}
