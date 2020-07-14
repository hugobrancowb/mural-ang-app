import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Imagem } from '../models/imagem.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MuralDataService {

  public search: Array<Imagem> = []; /* lista de resultados da busca utilizando o api */
  public lista: Array<Imagem> = []; /* lista de resultados da busca salvos no mural do user */
  public last_query: string = ''; /* ultima busca efetuada, para ficar salva na barra de busca */

  /* observable para atualizar o indicador de tamanho do mural na navbar */
  private _refresh_lista = new Subject<any>();
  get refresh_lista(){
    return this._refresh_lista;
  }

  constructor(private http: HttpClient) {
  }
  
  /* retorna a lista completa do mural */
  get_lista() {
    this.update_list(); /* update 'in_mural' boolean value */
    return this.lista;
  }
  
  /* retorna a lista de resultados */
  get_search() {
    this.update_list(); /* update 'in_mural' boolean value */
    return this.search;
  }

  /* adiciona o item atual ao Mural */
  add_lista(obj: Imagem) {
    this.lista.push(obj);
    this.update_list(); /* update 'in_mural' boolean value */
  }

  /* remove o item da lista baseado em sua id */
  rmv_lista(id: number) {
    
    this.lista = this.lista.filter(e => {
      return e.id != id;
    });

    this.update_list(); /* update 'in_mural' boolean value */
  }

  /* update 'in_mural' boolean value */
  update_list() {
    this.search.map(el_search => {
      var flag = false;

      this.lista.map(el_list => {
        if (el_search.id === el_list.id) {
          flag = true;
        }
      });

      el_search.in_mural = flag;
    });

    this._refresh_lista.next(this.lista); /* atualiza o valor da lista para todos que deram subscribe */
  }

  /******************/
  /** METÓDOS HTTP **/
  /******************/
  
  /* [GET] busca imagens utilizando a API da Pexels */
  search_img(query: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "563492ad6f91700001000001e88bb619b19848698039eed32a602d79"
      })
    };

    return this.http.get('https://api.pexels.com/v1/search?query=' + query + '&per_page=24', httpOptions);
  }

  /* [GET] obter mural no banco de dados em nosso servidor */
  get_mural_db(id: string) {
    return this.http.get('https://muralapp.me/get-mural?id=' + id);
  }

  /* [POST] salva o mural em um banco de dados em nosso servidor */
  post_mural_db(mural: Array<Imagem>) {
    const body = { mural: this.lista }
    return this.http.post<any>('https://muralapp.me/share-mural', body);
  }

}
