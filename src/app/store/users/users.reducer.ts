import { createReducer, on } from "@ngrx/store";
import { initialState } from "./users.state";
import { loadUsers, loadUsersErrors, loadUsersSuccess } from "./users.actions";


export const usersReducer = createReducer(
  initialState,

  on(loadUsers, state => ({
    ...state,
    loading: true,
    error: null
  })),


  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
    error: null
  })),

  on(loadUsersErrors, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))

);
