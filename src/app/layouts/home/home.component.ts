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
  
  public search_list: Imagem[] = [];
  public teste;

  formsearch = new FormGroup({
    query: new FormControl('')
  });

  constructor(private _dataservice: MuralDataService) {
  }

  ngOnInit(): void {
  }

  search() {
    console.log( (this.formsearch.value).query );
    this._dataservice.search_img( (this.formsearch.value).query ).subscribe(response => {
      this.teste = response;
      this.search_list = this.teste.photos;
    });
  }

  add(obj) {
    this._dataservice.add_lista(obj);
  }

}
