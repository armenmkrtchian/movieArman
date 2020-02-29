import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MovieSearchComponent } from './movie-search/movie-search.component';
import { GenresComponent } from './genres/genres.component';
import { CurrentMovieComponent } from './current-movie/current-movie.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
    GenresComponent,
    CurrentMovieComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

