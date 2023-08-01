import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { FiltroPipe } from './pipe/filtro.pipe';
import { DetailPokemonComponent } from './page/detail-pokemon/detail-pokemon.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, FiltroPipe, DetailPokemonComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
