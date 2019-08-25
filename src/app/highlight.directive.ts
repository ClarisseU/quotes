import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) { }
  @HostListener("click") onClicks(){
    this.textDeco("highlight")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("red")
  }
  private textDeco(action:string){
    this.elem.nativeElement.style.textDeco=action;
}
}