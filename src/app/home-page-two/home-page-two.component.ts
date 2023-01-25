import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  setPink,
  setYellow,
  reset,
  setPurple,
} from '../reducers/colors.action';

@Component({
  selector: 'app-home-page-two',
  templateUrl: './home-page-two.component.html',
  styleUrls: ['./home-page-two.component.css'],
})
export class HomePageTwoComponent implements OnInit {
  color$: Observable<string>;
  selectedColor: string = '#ffff';

  input1: string = '';
  input2: string = '';
  input3: string = '';
  input4: string = '';
  input5: string = '';

  constructor(private store: Store<{ color: string }>) {
    this.color$ = store.select('color');
    store.select('color').subscribe((color) => {
      this.selectedColor = color;
    });
  }

  ngOnInit() {}

  reset() {
    this.store.dispatch(reset());
    this.input1 = '';
    this.input2 = '';
    this.input3 = '';
    this.input4 = '';
    this.input5 = '';
  }
}
