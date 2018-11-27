import { Directive, ElementRef, Input, OnInit, OnChanges, DoCheck, OnDestroy, Renderer2, SimpleChange, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit, OnChanges, DoCheck, OnDestroy {


  @Input('appHighlight')
  color: string;

  constructor(private elem: ElementRef<HTMLElement>, 
    private renderer: Renderer2) { 
    console.log("Highlight!")
    console.log(elem.nativeElement)

  }

  ngOnInit(): void {
    console.log("ngOnInit");

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");
    console.log("color: " + this.color);
    this.renderer.setStyle(this.elem.nativeElement, 'color', this.color);
    this.elem.nativeElement.style.color = this.color;

  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

}
