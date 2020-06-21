import { Component, OnInit } from '@angular/core';
//import { ReactiveFormsModule }   from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
//import { MuralDataService } from '../../services/mural-data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  formsearch = new FormGroup({
    query: new FormControl('')
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  search() {
    console.log( (this.formsearch.value).query );
  }

}
