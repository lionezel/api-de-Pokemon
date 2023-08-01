import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { DetailPokemonComponent } from './page/detail-pokemon/detail-pokemon.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },

  { path: 'inicio/:id', component: DetailPokemonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
