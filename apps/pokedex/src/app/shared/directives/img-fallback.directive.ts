import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'img[imgFallback]',
  standalone: true,
})
export class ImgFallbackDirective {
  @Input() imgFallback = '';

  constructor(private readonly elementRef: ElementRef) {}

  @HostListener('error') loadFallbackOnError() {
    const element: HTMLImageElement = <HTMLImageElement>this.elementRef.nativeElement;
    element.src = this.imgFallback;
  }
}
