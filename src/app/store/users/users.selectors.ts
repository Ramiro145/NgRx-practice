import { AppState } from "../counter/app.state";
import { UsersState } from "./users.state";

export const selectUsers = (state: AppState) => state.users.users;
export const selectLoading = (state: AppState) => state.users.loading;
export const selectError = (state: AppState) => state.users.error;
