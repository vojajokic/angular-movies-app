import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // private httpClientOther = inject(HttpClient);

  constructor(private httpClient: HttpClient) {
  }

  isActive = true;

  fanFavoriteMovie: any[] = [];
  topMovies: any[] =  [];
  
  ngOnInit(): void {
    this.getFanFavoriteMovies();
    this.getTopMovies();
  }

  // getFanFavoriteMovies() {
  //   this.httpClient.get<any[]>('assets/data/fanFavoriteMoviesTemp.json')
  //   .pipe(
  //     catchError((error) => {
  //       console.log("[getFanFavoriteMovie] Error loading fan favorites data: ", error);

  //       return of(null);
  //     })
  //   ).subscribe((data) => {
  //       if (data) {
  //         this.fanFavoriteMovie = data;
  //       } else {
  //         this.fanFavoriteMovie = [];
  //       }
  //     }
  //   );
  // }

  getFanFavoriteMovies() {
    this.httpClient.get<any[]>('assets/data/fanFavoriteMovies.json')
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
    this.httpClient.get<any[]>('assets/data/topMovies.json')
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
