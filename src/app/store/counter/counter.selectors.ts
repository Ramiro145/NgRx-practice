import { createSelector } from "@ngrx/store";
import { AppState } from "./app.state";

//? como lees el estado

export const selectCounter = (state:AppState) => state.counter;

export const selectCounterValue = createSelector(
  selectCounter,
  (counter) => counter
);
