import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // currentStyle: Record<string, string> = {};
  // isCentered = false;
  // isSuccessed = false;
  // isLarge = true;

  constructor() {
    
  }
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
