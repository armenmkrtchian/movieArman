import { CurrentMovieComponent } from './current-movie/current-movie.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'current-movie', component: CurrentMovieComponent },
  { path: 'current-movie/:id', component: CurrentMovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  HomeComponent,
  CurrentMovieComponent,
]
