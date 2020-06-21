import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImgMuralComponent } from './img-mural/img-mural.component';

@NgModule({
  declarations: [
    ImgMuralComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImgMuralComponent,
  ]
})

export class ComponentsModule { }
