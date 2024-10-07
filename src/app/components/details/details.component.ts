import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  movieId = '';

  stars = [];
  directors = [];
  genres = [];

  constructor(private _activedRoute: ActivatedRoute,
    private moviesService: MoviesService
  ) { 
    this._activedRoute.params.subscribe((p) => {
      this.movieId = p["id"];

      console.log('Movie id = '+this.movieId);
    })
  }

  ngOnInit(): void {
    this.loadMovieSummary();
  }

  loadMovieSummary() {
    this.moviesService.getMovieSummary()
    .subscribe((data: any) => {
      this.stars = data.stars;
      this.genres = data.genres;
      this.directors = data.directors;
    })
  }
}
