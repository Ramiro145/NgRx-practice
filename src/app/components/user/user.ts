import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { UsersState } from '../../store/users/users.state';
import { Observable } from 'rxjs';
import { selectError, selectLoading, selectUsers } from '../../store/users/users.selectors';
import { loadUsers } from '../../store/users/users.actions';
import { AsyncPipe } from '@angular/common';
import { AppState } from '../../store/counter/app.state';

@Component({
  selector: 'app-user',
  imports: [AsyncPipe],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User implements OnInit {

  users$!: Observable<any[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  constructor(private store:Store<AppState>) {
    this.users$ = this.store.select(selectUsers);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }


}
