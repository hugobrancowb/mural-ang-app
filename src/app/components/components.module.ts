import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImgSearchComponent } from './img-search/img-search.component';
import { ImgMuralComponent } from './img-mural/img-mural.component';

@NgModule({
  declarations: [
    ImgSearchComponent,
    ImgMuralComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImgSearchComponent,
    ImgMuralComponent,
  ]
})

export class ComponentsModule { }
