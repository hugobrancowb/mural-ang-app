import { Component, OnInit } from '@angular/core';
import { MuralDataService } from '../../services/mural-data.service';
import { Imagem } from 'src/app/models/imagem.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Placeholder } from 'src/app/models/placeholder';
import { catchError, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { of } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-mural',
  templateUrl: './mural.component.html',
  styleUrls: ['./mural.component.scss'],
})
export class MuralComponent implements OnInit {
  public lista: Array<Imagem>;

  public share_link = {
    id: '',
    flag: false,
  };

  constructor(
    private router: Router,
    private _dataservice: MuralDataService,
    private route: ActivatedRoute
  ) {
    this.lista = _dataservice.getLista();

    if (this.route.snapshot.params.id) {
      // há um parametro no link url
      const id = this.route.snapshot.params.id; // parametro recebido pela url (typeof string) */

      this.getmural(id);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {}

  /* GET para obter a lista desejada à partir de um id */
  getmural(id: string): void {
    this.lista = Placeholder; // cria grid vazia como placeholder enquanto o API realiza a busca

    this._dataservice
      .getMuralDB(id)
      .pipe(
        tap((res: any) => {
          if (res?.status === 200) {
            // salva os resultados no serviço para obte-los novamente sem precisar da API
            const mural = res.body as Imagem[];

            mural.map((el) => {
              el.in_mural = true;
            });

            // salva os resultados no serviço para obte-los novamente sem precisar da API
            this._dataservice.lista = mural;
            this._dataservice.update_list(); // update 'in_mural' boolean value
            this.lista = this._dataservice.getLista(); // atualiza a busca da pagina
          } else {
            this.router.navigate(['']);
          }
        }),
        catchError(() => {
          this.router.navigate(['']);
          return of(null);
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  /* POST para salvar o mural em um banco de dados */
  postmural(): void {
    this._dataservice
      .postMuralDB(this.lista)
      .pipe(
        tap((res: any) => {
          if (res.status) {
            this.share_link.flag = true;
            this.share_link.id = res.id;
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
