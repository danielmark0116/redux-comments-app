import * as types from '../actions/types';

import uuid from 'uuid';

const initState = [
  {
    id: uuid.v4(),
    text: 'First comment',
    votes: 10
  }
];

export default function comments(state = initState, action: any) {
  switch (action.type) {
    case types.ADD_COMMENT:
      return [...state, action.payload];
    case types.EDIT_COMMENT:
      return state.map(comm => {
        if (comm.id === action.payload.id) {
          return { ...comm, text: action.payload.text };
        } else {
          return comm;
        }
      });
    case types.THUMBS_UP:
      return state.map(comm => {
        if (comm.id === action.payload) {
          return { ...comm, votes: comm.votes + 1 };
        } else {
          return comm;
        }
      });
    case types.THUMBS_DOWN:
      return state.map(comm => {
        if (comm.id === action.payload) {
          return { ...comm, votes: comm.votes > 0 ? comm.votes - 1 : 0 };
        } else {
          return comm;
        }
      });
    case types.DELETE_COMMENT:
      return state.filter(comm => comm.id !== action.payload);
    default:
      return state;
  }
}
