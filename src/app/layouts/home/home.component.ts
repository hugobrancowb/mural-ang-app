import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Imagem } from 'src/app/models/imagem.model';
import { MuralDataService } from '../../services/mural-data.service';
import { Placeholder } from 'src/app/models/placeholder';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
@UntilDestroy()
export class HomeComponent {
  public search_list: Array<Imagem>;

  /* grupo criado para o Form de busca */
  formsearch = new FormGroup({
    query: new FormControl(''),
  });

  constructor(private _dataservice: MuralDataService) {
    // precisa do constructor para obter o valor novamente qnd sair e voltar para a pagina

    this.search_list = JSON.parse(
      window.localStorage.getItem('searchList')
    ) as Imagem[];

    this.formsearch.patchValue({
      query: window.localStorage.getItem('lastQuery'),
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {}

  search(): void {
    // cria grid vazia como placeholder enquanto o API realiza a busca
    this.search_list = Placeholder;

    const busca_query = this.formsearch.value.query;

    this._dataservice
      .search_img(busca_query)
      .pipe(
        debounceTime(500),
        tap(() => {
          this.search_list = JSON.parse(
            window.localStorage.getItem('searchList')
          ) as Imagem[];
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
