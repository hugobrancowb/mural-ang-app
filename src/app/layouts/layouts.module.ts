import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { MuralComponent } from './mural/mural.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    HomeComponent,
    MuralComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    HomeComponent,
    MuralComponent,
  ]
})

export class LayoutsModule { }
