import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonesService } from 'src/app/services/pokemones.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css'],
})
export class DetailPokemonComponent {
  public detail_arr: any;
  public type_arr: any;
  public type_arr1: any;
  public stats_arr: any;

  constructor(
    private _pokemonServies: PokemonesService,
    private activateRoute: ActivatedRoute
  ) {
    const { id } = this.activateRoute.snapshot.params;

    //DETAIL POKEMON
    this._pokemonServies.getAllPokemon(id).subscribe((response) => {
      this.detail_arr = response;
      console.log(this.detail_arr);
    });

    //TYPE 1
    this._pokemonServies.getAllPokemon(id).subscribe((response) => {
      this.type_arr = response.types[0].type;
    });

    //TYPE 2
    this._pokemonServies.getAllPokemon(id).subscribe((response) => {
      this.type_arr1 = response.types[1].type;
    });

    this._pokemonServies.getAllPokemon(id).subscribe((response) => {
      this.stats_arr = response.stats;
      console.log(this.stats_arr);
    });
  }
}
