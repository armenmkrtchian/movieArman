import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  genreId: number

  childMessage: string

  handleSeletedGenre($event: number) {
    this.genreId = $event
  }

  constructor() { }

}
