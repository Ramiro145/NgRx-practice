import { createAction } from "@ngrx/store";


//? Action = "Algo que paso", siempre se modifica el store mediante actions
export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement')

