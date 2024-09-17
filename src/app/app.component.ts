import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The title of App Component';

  today = new Date();

  imageUrl = 'https://cdn.pixabay.com/photo/2021/08/02/18/11/covid-6517476_1280.jpg';
  imageWidth = 200;

  price = 10;
  
  sellingPrice = 15.50;

  attributeValue = "movies-app-test-value";

  multipleClasses = 'sample-bgcolor sample-color';
}
