import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { MuralComponent } from './layouts/mural/mural.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mural', component: MuralComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
