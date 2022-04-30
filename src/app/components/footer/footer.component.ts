import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  count: any = 1;
  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.count =  this.store.select('counter'); // select mean => Observalble , here 'counter' is alias name for your reducer which was defined in app.module.ts file
  }

}
