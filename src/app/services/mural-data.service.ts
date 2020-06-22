import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Imagem } from '../models/imagem.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MuralDataService {

  public search: Array<Imagem> = []; /* lista de resultados da busca utilizando o api */
  public lista: Array<Imagem> = []; /* lista de resultados da busca salvos no mural do user */
  public last_query: string = ''; /* ultima busca efetuada, para ficar salva na barra de busca */

  constructor(private http: HttpClient) {
  }

  /* adiciona o item atual ao Mural */
  add_lista(obj: Imagem) {
    this.lista.push(obj);
  }

  /* retorna a lista completa do mural */
  get_lista() {
    return this.lista;
  }
  
  /* retorna a lista de resultados */
  get_search() {
    return this.search;
  }

  /* remove o item da lista baseado em sua id */
  rmv_lista(id: number) {
    
    this.lista = this.lista.filter(e => {
      return e.id != id;
    });

    return this.lista;
  }

  /* busca imagens utilizando API */
  search_img(query: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "563492ad6f91700001000001e88bb619b19848698039eed32a602d79"
      })
    };

    return this.http.get('https://api.pexels.com/v1/search?query=' + query + '&per_page=20', httpOptions);
  }

}
