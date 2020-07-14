import { Component, OnInit } from '@angular/core';
import { MuralDataService } from './services/mural-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'MuralApp';

  public lista = {size: 0}

  constructor(private _dataservice: MuralDataService) {
  }

  ngOnInit(): void {
    this._dataservice.refresh_lista.subscribe( (arr) => {
      /* atualiza o tamanho da array sempre que ela for alterada no mural-data.service */
      this.lista.size = arr.length;
    });
  }

}
