import { Component, OnInit} from '@angular/core';
import { MuralDataService } from '../../services/mural-data.service'
import { DummyList } from './dummylist';

@Component({
  selector: 'img-search',
  templateUrl: './img-search.component.html',
  styleUrls: ['./img-search.component.scss']
})

export class ImgSearchComponent implements OnInit {

  public images: any[] = DummyList;

  constructor(private _dataservice: MuralDataService) {
  }

  ngOnInit(): void {
  }

  add(obj) {
    this._dataservice.add_lista(obj);
  }
  
}
