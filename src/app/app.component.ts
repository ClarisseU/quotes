import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    new Quote('Do not cry because it is over, smile because it happened','Watch finding Nemo', 'Dr. Seuss',new Date(2019,3,14)),
    new Quote( 'Do not cry because it is over, smile because it happened','Watch finding Nemo', 'Dr. Seuss',new Date(2019,3,14)),
  ];
}
