import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MuralDataService {

  public lista: any[] = [
    {
    "albumId": 1,
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "https://via.placeholder.com/600/d32776",
    "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    }
  ];

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
}
