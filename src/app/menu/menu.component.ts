import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as $ from 'jquery';
import { Observable } from 'rxjs';
import {
  setPink,
  setYellow,
  reset,
  setPurple,
} from '../reducers/colors.action';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  colors = [
    { id: 1, name: 'Pink', value: '#e61070' },
    { id: 2, name: 'Beige', value: '#6e4a0c' },
    { id: 3, name: 'Purple', value: '#aa31e6' },
    // { id: 5, name: 'Orange' },
    // { id: 4, name: 'Blue' },
  ];

  color$: Observable<number>;

  constructor(private store: Store<{ color: number }>) {
    this.color$ = store.select('color');
  }

  ngOnInit() {}

  setColor(color: any) {
    if (color === 'Pink') {
      this.store.dispatch(setPink());
    } else if (color === 'Beige') {
      this.store.dispatch(setYellow());
    } else if (color === 'Purple') {
      this.store.dispatch(setPurple());
    }
  }

  reset() {
    this.store.dispatch(reset());
  }
}
