import { combineReducers } from 'redux';
import comments from './comments';
import users from './users';

export const rootReducer = combineReducers({
  comments,
  users
});

export type AppState = ReturnType<typeof rootReducer>;
