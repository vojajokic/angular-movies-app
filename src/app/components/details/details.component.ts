import { AfterContentInit, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit {

  movieId = '';

  stars = ['Star #1 Name', 'Star #2 Name', 'Star #3 Name', ]
  directors = ['Director #1 Name', 'Director #2 Name', 'Director #3 Name', ]
  genres = ['Genre #1 Name', 'Genre #2 Name', 'Genre #3 Name', ]

  constructor(private _activedRoute: ActivatedRoute) { 
    this._activedRoute.params.subscribe((p) => {
      this.movieId = p["id"];

      console.log('Movie id = '+this.movieId);
    })
  }

  ngOnInit(): void {
    console.log('ngOnInit called')
  }
  ngOnChanges(): void {
    console.log('ngOnChanges called')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called')
  }

}
