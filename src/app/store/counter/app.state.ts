//? "Base de datos en memoria"

import { UsersState } from "../users/users.state";

export interface AppState{
  counter:number;
  users:UsersState;
}

