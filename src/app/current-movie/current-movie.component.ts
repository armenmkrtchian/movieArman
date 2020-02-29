import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { faStar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-current-movie',
  templateUrl: './current-movie.component.html',
  styleUrls: ['./current-movie.component.sass']
})
export class CurrentMovieComponent implements OnInit {


  constructor(private route: ActivatedRoute) {
  }

  faStar = faStar;

  key: string = '3a74f8b37b2ab0c4b9603d6a6b6497a8'
  item
  public movie

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'))
    this.movie = id
    this.getMovie()
  }


  getMovie() {
    fetch(`https://api.themoviedb.org/3/movie/${this.movie}?api_key=${this.key}&language=en-US`)
      .then(response => response.json())
      .then(res => this.item = res)
    // fetch(`https://api.themoviedb.org/3/movie/${this.movie}/videos?api_key=${this.key}&language=en-US`)
    //   .then(response => response.json())
    //   .then(res => {
    //     this.item.video = `https://www.youtube.com/embed/${res.results[0].key}`
    //   })
  }


}
