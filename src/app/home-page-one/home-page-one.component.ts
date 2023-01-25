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
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-home-page-one',
  templateUrl: './home-page-one.component.html',
  styleUrls: ['./home-page-one.component.css'],
})
export class HomePageOneComponent implements OnInit {
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
