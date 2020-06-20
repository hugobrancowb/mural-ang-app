import { Component, OnInit} from '@angular/core';
import { MuralDataService } from '../../services/mural-data.service'

@Component({
  selector: 'img-search',
  templateUrl: './img-search.component.html',
  styleUrls: ['./img-search.component.scss']
})

export class ImgSearchComponent implements OnInit {

  public images: any[];

  constructor(private _dataservice: MuralDataService) {
    this.images = _dataservice.search_img('any query');
  }

  ngOnInit(): void {
  }

  add(obj) {
    this._dataservice.add_lista(obj);
  }
  
}
