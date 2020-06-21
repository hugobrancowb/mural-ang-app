import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { DummyList } from '../services/dummylist';
import { Imagem } from '../models/imagem.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MuralDataService {

  public search: any[] = [];
  public lista: any[] = [];
  public teste;

  constructor(private http: HttpClient) { }

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
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "563492ad6f91700001000001e88bb619b19848698039eed32a602d79"
      })
    };

    return this.http.get('https://api.pexels.com/v1/search?query=' + query + '&per_page=50', httpOptions);
  }
}
