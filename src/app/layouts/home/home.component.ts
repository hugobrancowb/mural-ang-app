import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Imagem } from 'src/app/models/imagem.model';
import { MuralDataService } from '../../services/mural-data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  
  public search_list: Imagem[];

  formsearch = new FormGroup({
    query: new FormControl('')
  });

  constructor(private _dataservice: MuralDataService) {
    this.search_list = _dataservice.search_img('');
  }

  ngOnInit(): void {
  }

  search() {
    console.log( (this.formsearch.value).query );
  }

  add(obj) {
    this._dataservice.add_lista(obj);
  }

}
