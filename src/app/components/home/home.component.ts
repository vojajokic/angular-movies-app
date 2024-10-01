import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    
  }

  isActive = true;

  fanFavoriteMovie: any[] = 
  [
    {
      imageUrl: '../../../assets/images/card-image.png',
      title: 'Movie #1 Title',
      actors: 'Movie #1 actors',
      year: '2023',
      rate: 9.2,
      rank: 1
    },
    {
      imageUrl: '../../../assets/images/card-image.png',
      title: 'Movie #2 Title',
      actors: 'Movie #2 actors',
      year: '2023',
      rate: 9.5,
      rank: 2
    },
    {
      imageUrl: '../../../assets/images/card-image.png',
      title: 'Movie #3 Title',
      actors: 'Movie #3 actors',
      year: '2023',
      rate: 8.5,
      rank: 5
    },
    {
      imageUrl: '../../../assets/images/card-image.png',
      title: 'Movie #4 Title',
      actors: 'Movie #4 actors',
      year: '2023',
      rate: 9.5,
      rank: 1
    },
    
  ]
  topMovies: any[] = 
  [
    {
      imageUrl: '../../../assets/images/card-image.png',
      title: 'Movie #1 Title',
      actors: 'Movie #1 actors',
      year: '2023',
      rate: 9.2,
      rank: 1
    },
    {
      imageUrl: '../../../assets/images/card-image.png',
      title: 'Movie #2 Title',
      actors: 'Movie #2 actors',
      year: '2023',
      rate: 9.5,
      rank: 2
    },
    
  ]
  
   // currentStyle: Record<string, string> = {};
  // isCentered = false;
  // isSuccessed = false;
  // isLarge = true;

 // constructor() {  
  //   this.currentStyle = {
  //     'text-align': this.isCentered ? 'center' : '',
  //     'color': this.isSuccessed ? 'green' : 'red',
  //     'font-size': this.isLarge ? 'large' : 'small'
  //   }
  //  }

  ngOnInit(): void {
  }

}
