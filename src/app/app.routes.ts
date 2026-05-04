import { Routes } from '@angular/router';
import { Counter } from './components/counter/counter';
import { User } from './components/user/user';

export const routes: Routes = [

  {
    path:'counter',
    component:Counter
  },

  {
    path:'users',
    component:User
  },

  {
    path:'**',
    redirectTo:'counter',
    pathMatch:'full'
  }

];
