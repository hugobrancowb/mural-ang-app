import { Component } from '@angular/core';
import { MuralDataService } from '../../services/mural-data.service'
import { Imagem } from 'src/app/models/imagem.model';

@Component({
  selector: 'app-mural',
  templateUrl: './mural.component.html',
  styleUrls: ['./mural.component.scss']
})

export class MuralComponent {

  public lista: Array<Imagem>;

  constructor(private _dataservice: MuralDataService) {
    this.lista = _dataservice.get_lista();
  }

  ngOnInit(): void {
  }
  
  rmv(obj) {
    this.lista = this._dataservice.rmv_lista(obj.id);
  }

}
