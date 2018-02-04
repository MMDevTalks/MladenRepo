import { Directive, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import Vibrant from 'node-vibrant';
export interface Colors {
  DarkVibrant: string;
  Vibrant: string;
}
@Directive({
  selector: '[mmColorExtractor]'
})
export class ColorExtractorDirective {

  @Output() colorsExtracted: EventEmitter<Colors> = new EventEmitter();

  constructor(private _elementRef: ElementRef) { }

  @HostListener('load') imageLoadSuccess() {
    this._getColors(this._elementRef.nativeElement).then(palette => {
      this.colorsExtracted.emit(palette);
    });
  }


  

  private _getColors(img: HTMLImageElement) {
    const vibrant = new Vibrant(img);
    return vibrant.getPalette().then(palette => ({
      DarkVibrant: palette.DarkVibrant.getHex(),
      Vibrant: palette.Vibrant.getHex(),
    }));
  }
}
