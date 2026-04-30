import { createReducer, on  } from "@ngrx/store";
import { increment, decrement } from "./counter.actions";


//? Reducer = "Como cambia el estado"

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
);
