import { Directive, ElementRef, HostListener, inject, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'img[imgFallback]',
})
export class ImgFallbackDirective {
  @Input() imgFallback = '';

  private readonly elementRef = inject(ElementRef);

  @HostListener('error') loadFallbackOnError() {
    const element: HTMLImageElement = <HTMLImageElement>this.elementRef.nativeElement;
    element.src = this.imgFallback;
  }
}
