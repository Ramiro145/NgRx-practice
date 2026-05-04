import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadUsers, loadUsersErrors, loadUsersSuccess } from './users.actions';
import { catchError, map, of, switchMap } from "rxjs";


import { inject } from '@angular/core';

@Injectable()
export class UsersEffects {

  private actions$ = inject(Actions);
  private http = inject(HttpClient);

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() =>
        this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').pipe(
          map(users => loadUsersSuccess({ users })),
          catchError(error => of(loadUsersErrors({ error: error.message })))
        )
      )
    )
  );

}
