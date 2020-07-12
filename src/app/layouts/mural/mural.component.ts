import { Component, OnInit } from '@angular/core';
import { MuralDataService } from '../../services/mural-data.service'
import { Imagem } from 'src/app/models/imagem.model';

@Component({
  selector: 'app-mural',
  templateUrl: './mural.component.html',
  styleUrls: ['./mural.component.scss']
})

export class MuralComponent implements OnInit {

  public lista: Array<Imagem>;

  constructor(private _dataservice: MuralDataService) {
    this.lista = _dataservice.get_lista();
  }

  ngOnInit(): void {
    const value = "; " + document.cookie;
    var getcookie = value.split("; " + "lista" + "=");

    if (getcookie.length == 2) {
      var cookie_list = getcookie.pop().split(";").shift();

      if (cookie_list.length > 0) {
        this.lista = JSON.parse(cookie_list);
        this._dataservice.lista = this.lista;
      }

    }
  }

  getmural(id: number) {
    this._dataservice.get_mural_db(id).subscribe( (res: Array<Imagem>) => {
      var mural = res; /* salva os resultados no serviço para obte-los novamente sem precisar da API */

      mural.map(el => {
        el.in_mural = true;
      });

      this._dataservice.lista = mural; /* salva os resultados no serviço para obte-los novamente sem precisar da API */
      this._dataservice.update_list(); /* update 'in_mural' boolean value */
      this.lista = this._dataservice.get_lista(); /* atualiza a busca da pagina */
    });
  }

}
