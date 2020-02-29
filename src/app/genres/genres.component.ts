import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.sass']
})
export class GenresComponent {

  textColor: string

  arrGenres = [
    {
      "id": 0,
      "name": "All",
      "color": "gold"
    },
    {
      "id": 28,
      "name": "Action",
      "color": "white"
    },
    {
      "id": 12,
      "name": "Adventure",
      "color": "white"
    },
    {
      "id": 16,
      "name": "Animation",
      "color": "white"
    },
    {
      "id": 35,
      "name": "Comedy",
      "color": "white"
    },
    {
      "id": 80,
      "name": "Crime",
      "color": "white"
    },
    {
      "id": 18,
      "name": "Drama",
      "color": "white"
    },
    {
      "id": 10751,
      "name": "Family",
      "color": "white"
    },
    {
      "id": 14,
      "name": "Fantasy",
      "color": "white"
    },
    {
      "id": 36,
      "name": "History",
      "color": "white"
    },
    {
      "id": 27,
      "name": "Horror",
      "color": "white"
    },
    {
      "id": 10402,
      "name": "Music",
      "color": "white"
    },
    {
      "id": 9648,
      "name": "Mystery",
      "color": "white"
    },
    {
      "id": 10749,
      "name": "Romance",
      "color": "white"
    },
    {
      "id": 878,
      "name": "Science Fiction",
      "color": "white"
    },
    {
      "id": 10770,
      "name": "TV Movie",
      "color": "white"
    },
    {
      "id": 53,
      "name": "Thriller",
      "color": "white"
    },
    {
      "id": 10752,
      "name": "War",
      "color": "white"
    },
    {
      "id": 37,
      "name": "Western",
      "color": "white"
    }
  ]

  constructor() { }


  @Output() selectedGenre = new EventEmitter();

  selectGenre(genre) {
    this.selectedGenre.emit(genre.id)
    this.arrGenres.forEach(it => it.color = 'white')
    genre.color = 'gold'
  }
}
