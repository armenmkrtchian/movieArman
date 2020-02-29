import { Component, OnInit, Input } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.sass']
})
export class MovieSearchComponent implements OnInit {
  faStar = faStar;

  @Input() genreId: number

  page: number = 1
  key: string = '3a74f8b37b2ab0c4b9603d6a6b6497a8'

  movies = []

  constructor(private router: Router) { }

  ngOnChanges() {
    this.getListMovies()
  }

  ngOnInit() {
    this.getListMovies()
  }

  getListMovies() {
    if (!this.genreId) {
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.key}&page=${this.page}&language=en`)
        .then(response => response.json())
        .then(res => { this.movies = res.results })
    } else {
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${this.key}&page=${this.page}&&with_genres=${this.genreId}`)
        .then(response => response.json())
        .then(res => { this.movies = res.results })
    }
  }

  onSelect(movie) {
    this.router.navigate(['/current-movie', movie.id])
  }

}
