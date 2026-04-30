export interface UsersState{
  users: any[];
  loading:boolean;
  error:string|null;
}



export const initialState:UsersState = {
  users:[],
  loading:false,
  error:null
}
