import { Component, Input } from '@angular/core';
import { MuralDataService } from '../../services/mural-data.service'
import { Imagem } from 'src/app/models/imagem.model';

@Component({
  selector: 'grid-images',
  templateUrl: './grid-images.component.html',
  styleUrls: ['./grid-images.component.scss']
})
export class GridImagesComponent {

  @Input() image_list: Array<Imagem>;
  @Input() isMural: Boolean;

  constructor(private _dataservice: MuralDataService) {
  }
  
  ngOnInit(): void {
  }
  
  add(obj) {
    if(obj.photographer_url !== 'https://muralapp.me') {
      this._dataservice.addLista(obj);
    }
  }

  rmv(obj) {
    this._dataservice.rmvLista(obj.id);
    this.image_list = (this.isMural) ? this._dataservice.getLista() : this._dataservice.getSearch(); /* atualiza a lista atual de acordo com a página (search/mural) */
  }

}
