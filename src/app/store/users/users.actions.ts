import { createAction, props } from "@ngrx/store";



export const loadUsersSuccess = createAction(
  '[Users] Load Users Success',
  props<{users:any[]}>()
)


export const loadUsersErrors = createAction(
  '[Users] Load Users Error',
  props<{error:string}>()
)
