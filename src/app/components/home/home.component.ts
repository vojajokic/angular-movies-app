import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, of } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private moviesService: MoviesService) {
  }

  isActive = true;

  fanFavoriteMovie: any[] = [];
  topMovies: any[] =  [];
  
  ngOnInit(): void {
    this.getFanFavoriteMovies();
    this.getTopMovies();
  }

  getFanFavoriteMovies() {
    this.moviesService.getFanFavoriteMovies()
    .subscribe({
      next: (data: any[]) => {
        this.fanFavoriteMovie = data;
      },
      error: (error) => {
        console.log("[getFanFavoriteMovie] Error loading fan favorites data: ", error);
      },
      complete: () => {
        console.log("[getFanFavoriteMovie] Request completes successfuly");
      }
    }
    );
  }

  getTopMovies() {
    this.moviesService.getTopMovies()
    .subscribe({
      next: (data: any[]) => {
        this.topMovies = data;
      },
      error: (error) => {
        console.log("[getTopMovies] Error loading top movies", error);
      },
      complete: () => {
        console.log("[getTopMovies] Request completed successfuly");
      }
    });
  }

}
