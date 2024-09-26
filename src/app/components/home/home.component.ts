import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movieId = '';

  constructor(private _activatedRoute: ActivatedRoute) { 
    this._activatedRoute.params.subscribe((p) => {
      this.movieId = p["id"];
      console.log("Movie Id is ", this.movieId)
    })
  }

  ngOnInit(): void {
  }

}
