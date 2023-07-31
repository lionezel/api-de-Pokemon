import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interfaces';
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

  constructor(private _pokemonServies: PokemonesService) {}

  ngOnInit(): void {
    this._pokemonServies.getAllPokemons().subscribe((pokemons) => {
      this.pokemons = pokemons;
    });
  }
}
