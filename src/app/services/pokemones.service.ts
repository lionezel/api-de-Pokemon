import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  FetchAllPokemonResponse,
  Pokemon,
} from '../interfaces/pokemon.interfaces';

@Injectable({
  providedIn: 'root',
})
export class PokemonesService {
  private baseURL: string = 'https://pokeapi.co/api/v2';

  constructor(private _http: HttpClient) {}

  getAllPokemons(): Observable<Pokemon[]> {
    return this._http
      .get<FetchAllPokemonResponse>(`${this.baseURL}/pokemon?limit=1500`)
      .pipe(map(this.transformSmallPokemonIntoPokemon));
  }

  private transformSmallPokemonIntoPokemon(
    resp: FetchAllPokemonResponse
  ): Pokemon[] {
    const pokemonList: Pokemon[] = resp.results.map((poke) => {
      const urlArr = poke.url.split('/');
      const id = urlArr[6];
      const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

      return { 
        id,
        pic,
        name: poke.name,
      };
    });

    return pokemonList;
  }
}
