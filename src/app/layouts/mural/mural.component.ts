import { Component, OnInit } from '@angular/core';
import { MuralDataService } from '../../services/mural-data.service'
import { Imagem } from 'src/app/models/imagem.model';
import { ActivatedRoute } from '@angular/router';
import { Placeholder } from 'src/app/models/placeholder';

@Component({
  selector: 'app-mural',
  templateUrl: './mural.component.html',
  styleUrls: ['./mural.component.scss']
})

export class MuralComponent implements OnInit {

  public lista: Array<Imagem>;

  public share_link = {
    id: '',
    flag: false
  }

  constructor(private _dataservice: MuralDataService, private route: ActivatedRoute) {
    this.lista = _dataservice.get_lista();

    if(this.route.snapshot.params.id) { /* há um parametro no link url */
      const id = this.route.snapshot.params.id; /* parametro recebido pela url (typeof string) */

      this.getmural(id);
    }
  }

  ngOnInit(): void {
  }

  /* GET para obter a lista desejada à partir de um id */
  getmural(id: string) {
    this.lista = Placeholder; /* cria grid vazia como placeholder enquanto o API realiza a busca */

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

  /* POST para salvar o mural em um banco de dados */
  postmural() {
    this._dataservice.post_mural_db(this.lista).subscribe( (res: any) => {
      if(res.status) {
        this.share_link.flag = true;
        this.share_link.id = res.id;
      };
    });
  }

}
