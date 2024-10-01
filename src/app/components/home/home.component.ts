import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private httpClient: HttpClient) {
  }

  isActive = true;

  fanFavoriteMovie: any[] = [];
  topMovies: any[] =  [];
  
  ngOnInit(): void {
    this.getFanFavoriteMovies();
    this.getTopMovies();
  }

  getFanFavoriteMovies() {
    this.httpClient.get<any[]>('assets/data/fanFavoriteMovies.json')
    .subscribe((data: any[]) => {
      this.fanFavoriteMovie = data;
    })
  }

  getTopMovies() {
    this.httpClient.get<any[]>('assets/data/topMovies.json')
    .subscribe((data: any[]) => {
      this.topMovies = data;
    })
  }

}
