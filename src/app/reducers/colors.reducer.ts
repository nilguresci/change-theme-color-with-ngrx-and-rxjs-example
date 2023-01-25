import { createReducer, on } from '@ngrx/store';
import { setPink, setYellow, reset, setPurple } from './colors.action';

export const initialState = '#ffff';

export const colorReducer = createReducer(
  initialState,
  on(setPink, (state) => '#f8eef7'),
  on(setYellow, (state) => '#fdf2eb'),
  on(setPurple, (state) => '#faf3fe'),
  on(reset, (state) => initialState)
);
