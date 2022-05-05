import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-rating',
  templateUrl: './start-rating.component.html',
  styleUrls: ['./start-rating.component.css']
})
export class StartRatingComponent implements OnInit {

  public totalStars = 5;
  public eachStarOccupancyRange = 100/this.totalStars;
  public ratingsForCss =[
    {
      name: 'jsh',
      rating: 4,
      content: 'hello this sample content hello this sample content hello this sample content hello this sample content'
    },{
      name: 'ABC',
      rating: 3.5,
      content: 'hello this sample content hello this sample content hello this sample content hello this sample content'
    },{
      name: 'Vsh',
      rating: 5,
      content: 'hello this sample content hello this sample content hello this sample content hello this sample content'
    },{
      name: 'Njs',
      rating: 5,
      content: 'hello this sample content hello this sample content hello this sample content hello this sample content'
    },{
      name: 'Som',
      rating: 2.5,
      content: 'hello this sample content hello this sample content hello this sample content hello this sample content'
    },
  ];
  isCssType: boolean = true;

  // THis is for HTML icons implemnetation

  public math: Math ;
  ratingsForHTML = [{
    name: 'jsh',
    rating: 4,
    content: 'hello this sample content hello this sample content hello this sample content hello this sample content'
  }];
  emptyratingIcons = [
    {name: 's1'},
    {name: 's2'},
    {name: 's3'},
    {name: 's4'},
    {name: 's5'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onType(type:string){
    this.isCssType = type ==='css'? true : false;
  }

}
