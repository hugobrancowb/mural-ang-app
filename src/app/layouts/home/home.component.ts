import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Imagem } from 'src/app/models/imagem.model';
import { MuralDataService } from '../../services/mural-data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  
  public search_list: Array<Imagem>;

  /* grupo criado para o Form de busca */
  formsearch = new FormGroup({
    query: new FormControl('')
  });

  constructor(private _dataservice: MuralDataService) {
    /* precisa do constructor para obter o valor novamente qnd sair e voltar para a pagina */
    this.search_list = this._dataservice.get_search();
    this.formsearch.patchValue({query: this._dataservice.last_query});
  }

  ngOnInit(): void {
  }

  search() {
    const busca_query = (this.formsearch.value).query;
    this._dataservice.search_img( busca_query ).subscribe(res => {
      this._dataservice.last_query = busca_query;
      this.search_list = res.photos; /* atualiza a busca da pagina */
      this._dataservice.search = this.search_list; /* salva os resultados no serviço para obte-los novamente sem precisar da API */
    });
  }

  add(obj) {
    console.log((this.formsearch.value).query);
    this._dataservice.add_lista(obj);
  }

}
