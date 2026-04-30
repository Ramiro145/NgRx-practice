import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement } from '../../store/counter/counter.actions';
import { AsyncPipe } from '@angular/common';
import { selectCounterValue } from '../../store/counter/counter.selectors';
import { AppState } from '../../store/counter/app.state';

@Component({
  selector: 'app-counter',
  imports: [AsyncPipe],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {

  counter$: Observable<number>;

  constructor(private store: Store<AppState>){
    this.counter$ = this.store.select(selectCounterValue);
  }

  increment(){
    this.store.dispatch(increment());
  }

  decrement(){
    this.store.dispatch(decrement());
  }

}
