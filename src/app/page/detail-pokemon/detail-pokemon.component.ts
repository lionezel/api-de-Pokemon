import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonesService } from 'src/app/services/pokemones.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css'],
})
export class DetailPokemonComponent {
  constructor(
    private _pokemonServies: PokemonesService,
    private activateRoute: ActivatedRoute
  ) {
    const { id } = this.activateRoute.snapshot.params;

    this._pokemonServies.getAllPokemon(id).subscribe((response) => {
      console.log(response);
    });
  }
}
