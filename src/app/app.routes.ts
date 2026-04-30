import { Routes } from '@angular/router';
import { Counter } from './components/counter/counter';

export const routes: Routes = [

  {
    path:'counter',
    component:Counter
  },

  {
    path:'**',
    redirectTo:'counter',
    pathMatch:'full'
  }

];
