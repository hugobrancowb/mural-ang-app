import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, tap } from 'rxjs/operators'
import { Imagem } from 'src/app/models/imagem.model';
import { MuralDataService } from '../../services/mural-data.service'
import { Placeholder } from 'src/app/models/placeholder';

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
    this.search_list = Placeholder; /* cria grid vazia como placeholder enquanto o API realiza a busca */

    const busca_query = (this.formsearch.value).query;

    this._dataservice.search_img( busca_query ).pipe(
      debounceTime(500),
      tap((res) => {
        this._dataservice.last_query = busca_query;
        this._dataservice.search = res.photos; /* salva os resultados no serviço para obte-los novamente sem precisar da API */
        this._dataservice.update_list(); /* update 'in_mural' boolean value */
        this.search_list = this._dataservice.get_search(); /* atualiza a busca da pagina */
      })
    ).subscribe();
  }

}
