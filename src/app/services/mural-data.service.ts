import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Imagem } from '../models/imagem.model';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MuralDataService {
  // lista de resultados da busca utilizando o api
  public search: Array<Imagem> = [];

  // lista de resultados da busca salvos no mural do user
  public lista: Array<Imagem> = [];

  // observable para atualizar o indicador de tamanho do mural na navbar
  private _refresh_lista = new Subject<any>();

  get refresh_lista(): Observable<any> {
    return this._refresh_lista;
  }

  constructor(private http: HttpClient) {}

  // retorna a lista completa do mural
  getLista(): Imagem[] {
    this.update_list();
    return this.lista;
  }

  /* retorna a lista de resultados */
  getSearch(): Imagem[] {
    this.update_list();
    return this.search;
  }

  /* adiciona o item atual ao Mural */
  addLista(obj: Imagem): void {
    this.lista.push(obj);
    this.update_list();
  }

  /* remove o item da lista baseado em sua id */
  rmvLista(id: number): void {
    this.lista = this.lista.filter((e) => {
      return e.id != id;
    });

    this.update_list();
  }

  /* update 'in_mural' boolean value */
  update_list(): void {
    this.search.map((el_search) => {
      let flag = false;

      this.lista.map((el_list) => {
        if (el_search.id === el_list.id) {
          flag = true;
        }
      });

      el_search.in_mural = flag;
    });

    // atualiza o valor da lista para todos que deram subscribe
    this._refresh_lista.next(this.lista);
  }

  /******************/
  /** METÓDOS HTTP **/
  /******************/

  /* [GET] busca imagens utilizando a API da Pexels */
  search_img(query: string): Observable<any> {
    window.localStorage.setItem('lastQuery', JSON.stringify(query));

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization:
          '563492ad6f91700001000001e88bb619b19848698039eed32a602d79',
      }),
    };

    return this.http
      .get(
        'https://api.pexels.com/v1/search?query=' + query + '&per_page=24',
        httpOptions
      )
      .pipe(
        tap((res: any) => {
          window.localStorage.setItem('searchList', JSON.stringify(res.photos));
          return this.getSearch();
        })
      );
  }

  /* [GET] obter mural no banco de dados em nosso servidor */
  getMuralDB(id: string): Observable<any> {
    return this.http.get('https://muralapp.me/get-mural?id=' + id);
  }

  /* [POST] salva o mural em um banco de dados em nosso servidor */
  postMuralDB(mural: Array<Imagem>): Observable<any> {
    const body = { mural: this.lista };
    return this.http.post<any>('https://muralapp.me/share-mural', body);
  }
}
