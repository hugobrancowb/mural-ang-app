import { Injectable } from '@angular/core';
import { DummyList } from '../services/dummylist';

@Injectable({
  providedIn: 'root'
})
export class MuralDataService {

  public search: any[];
  public lista: any[] = [];

  constructor() { }

  /* adiciona o item atual ao Mural */
  add_lista(obj: any) {
    this.lista.push(obj);
  }

  /* retorna a lista completa do mural */
  get_lista() {
    return this.lista;
  }

  /* remove o item da lista baseado em sua id */
  rmv_lista(id: number) {
    console.log(this.lista);
    
    this.lista = this.lista.filter(e => {
      return e.id != id;
    });

    return this.lista;
  }

  /* busca imagens utilizando API */
  /* falta implementar o api */
  search_img(query: string) {
    this.search = DummyList;
    return this.search;
  }
}
