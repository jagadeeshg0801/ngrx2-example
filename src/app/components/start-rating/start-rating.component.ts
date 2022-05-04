import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-rating',
  templateUrl: './start-rating.component.html',
  styleUrls: ['./start-rating.component.css']
})
export class StartRatingComponent implements OnInit {

  public ratings =[
    {
      name: 'jsh',
      rating: 4,
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
  ]
  constructor() { }

  ngOnInit(): void {
  }

}