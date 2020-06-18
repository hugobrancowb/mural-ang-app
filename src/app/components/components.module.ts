import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { ImgSearchComponent } from './img-search/img-search.component';
import { ImgMuralComponent } from './img-mural/img-mural.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ImgSearchComponent,
    ImgMuralComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    ImgSearchComponent,
    ImgMuralComponent,
  ]
})

export class ComponentsModule { }
