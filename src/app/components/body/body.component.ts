import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  increment(){
    this.store.dispatch({type:'Increment'});
  }

  decrement(){
    this.store.dispatch({type:'Decrement'});
  }

  reset(){
    this.store.dispatch({type:'Reset'});
  }

}
