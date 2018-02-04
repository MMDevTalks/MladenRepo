import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { IconComponent } from './components/icon/icon.component';
import { MoviePosterComponent } from './components/movie-poster/movie-poster.component';
import { AutoFocusDirective } from './directives/auto-focus.directive';
import { TintDirective } from './directives/tint.directive';
import { SvgDefinitionsComponent } from './components/svg-definitions/svg-definitions.component';
import { ColorExtractorDirective } from './directives/color-extractor.directive';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ButtonComponent, IconComponent, MoviePosterComponent, AutoFocusDirective, TintDirective, SvgDefinitionsComponent, ColorExtractorDirective, SpinnerComponent],
  exports: [MoviePosterComponent, SvgDefinitionsComponent, IconComponent, ButtonComponent, ColorExtractorDirective, SpinnerComponent]
})
export class SharedModule { }
