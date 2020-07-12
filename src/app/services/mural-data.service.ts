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
    this.update_list(); /* update 'in_mural' boolean value */
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

  /* remove o item da lista baseado em sua id */
  rmv_lista(id: number) {
    
    this.lista = this.lista.filter(e => {
      return e.id != id;
    });

    this.update_list(); /* update 'in_mural' boolean value */
    return this.lista;
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

    /* considerando que esta função é chamada sempre que há uma alteração na lista-mural, aproveitamos o momento para atualizar o cookie */    
    /* COOKIE DISABLED
    this.set_cookies();
    */
  }
  
  set_cookies() {
    if(this.lista.length < 0) { /* essa condicional evita que o cookie inicie vazio numa nova sessão */
      const date = new Date();
      
      // Set it expire in 7 days
      date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
      
      // Set it
      document.cookie = "lista"+"="+JSON.stringify(this.lista)+"; expires="+date.toUTCString()+"; path=/";
    }
  }

  /* METÓDOS HTTP */
  
  /* [GET] busca imagens utilizando API */
  search_img(query: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "563492ad6f91700001000001e88bb619b19848698039eed32a602d79"
      })
    };

    return this.http.get('https://api.pexels.com/v1/search?query=' + query + '&per_page=24', httpOptions);
  }

  /* [GET] obter mural no banco de dados */
  get_mural_db(id: number) {
    return this.http.get('https://muralapp.me:3000/get-mural?id=' + id);
  }

  /* [POST] salva o mural em um banco de dados */
  post_mural_db(mural: Array<Imagem>) {
    const body = { mural: this.lista }
    return this.http.post<any>('https://muralapp.me:3000/share-mural', body);
  }

}
