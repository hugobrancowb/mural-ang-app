import { Component, OnInit} from '@angular/core';
import { MuralDataService } from '../../services/mural-data.service'

@Component({
  selector: 'img-search',
  templateUrl: './img-search.component.html',
  styleUrls: ['./img-search.component.scss']
})

export class ImgSearchComponent implements OnInit {

  public search_list: any[];

  constructor(private _dataservice: MuralDataService) {
    this.search_list = _dataservice.search_img('');
  }

  ngOnInit(): void {
  }

  add(obj) {
    this._dataservice.add_lista(obj);
  }
  
}
