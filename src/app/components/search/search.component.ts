import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movieTitle = "";
  searchresult: any[] = [];
  
  constructor(private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService) { 
    this.activatedRoute.params.subscribe((p) => {
      this.movieTitle = p["movieTitle"];
    })
  }

  ngOnInit(): void {
    this.searchMovies();
  }

  searchMovies() {
    this.moviesService.getSearchedMovies()
    .subscribe((data: any[]) => {
      this.searchresult = data;
    })
  }

}
