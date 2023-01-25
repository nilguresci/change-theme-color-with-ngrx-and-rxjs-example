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
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  color$: Observable<string>;
  selectedColor: string = '#ffff';

  constructor(private store: Store<{ color: string }>) {
    this.color$ = store.select('color');
    store.select('color').subscribe((color) => {
      this.selectedColor = color;
    });
  }

  ngOnInit() {}
}
