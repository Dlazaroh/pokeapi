import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
private baseUrl = 'https://pokeapi.co/api/v2/pokemon'; 
  constructor(private http: HttpClient) { }

  getPokemonPage(page: number): Observable<any>{
    const limit = 20;
    const offset = (page - 1) * limit;
    return this.http.get(`${this.baseUrl}?limit=${limit}&offset=${offset}`)
  }

  getPokemonByName(name: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/${name}`)
  }

}
