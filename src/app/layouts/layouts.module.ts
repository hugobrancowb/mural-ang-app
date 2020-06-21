import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormsModule,
  ],
  exports: [
    HomeComponent,
    MuralComponent,
  ]
})

export class LayoutsModule { }
