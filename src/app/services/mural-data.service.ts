import { Injectable } from '@angular/core';
import { createClient } from 'pexels';

import { DummyList } from '../services/dummylist';
import { Imagem } from '../models/imagem.model';

@Injectable({
  providedIn: 'root'
})
export class MuralDataService {

  public search: any[] = [];
  public lista: any[] = [];

  constructor() { }

  /* adiciona o item atual ao Mural */
  add_lista(obj: Imagem) {
    this.lista.push(obj);
  }

  /* retorna a lista completa do mural */
  get_lista() {
    return this.lista;
  }

  /* remove o item da lista baseado em sua id */
  rmv_lista(id: number) {
    
    this.lista = this.lista.filter(e => {
      return e.id != id;
    });

    return this.lista;
  }

  /* busca imagens utilizando API */
  /* falta implementar o api */
  search_img(query: string) {
/*
    const client = createClient('563492ad6f91700001000001e88bb619b19848698039eed32a602d79');
    client.photos.search({ query, per_page: 50 }).then(photos => {
      //this.search = photos;
      console.log(photos);
    });
    */
    return DummyList;
  }
}
