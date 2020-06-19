import { Component, OnInit } from '@angular/core';
import { MuralDataService } from '../../services/mural-data.service'

@Component({
  selector: 'img-mural',
  templateUrl: './img-mural.component.html',
  styleUrls: ['./img-mural.component.scss']
})

export class ImgMuralComponent implements OnInit {

  public lista: any[] = [];

  constructor(private _dataservice: MuralDataService) {
    this.lista = _dataservice.get_lista();
  }

  ngOnInit(): void {
  }
  
  rmv(obj) {
    this.lista = this._dataservice.rmv_lista(obj.id);
  }

}
