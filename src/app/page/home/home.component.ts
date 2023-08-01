import { Component, OnInit } from '@angular/core';
import { PokeType, Pokemon } from 'src/app/interfaces/pokemon.interfaces';
import { PokemonesService } from 'src/app/services/pokemones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public pokemons: Pokemon[] = [];
  public page: number = 0;
  public search: string = '';

  constructor(
    private _pokemonServies: PokemonesService,
  ) {

  }

  ngOnInit(): void {
    this._pokemonServies.getAllPokemons().subscribe((pokemons) => {
      this.pokemons = pokemons;
      console.log(this.pokemons);
    });
  }
  
  nextPage() {
    this.page += 20;
  }

  prevPage() {
    if (this.page > 0) {
      this.page -= 20;
    }
  }

  onSeasrchPokemon(search: string) {
    this.page = 0;
    this.search = search;
  }
}
