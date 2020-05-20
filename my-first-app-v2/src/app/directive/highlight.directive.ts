import { Directive, OnInit, ElementRef, Renderer2, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
  selector: '[appHighlight]'
})
export class HighLightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'back-ground-color', 'blue', false, false);
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'back-ground-color', 'blue', false, false);
    this.backgroundColor = this.defaultColor;
  }
}
