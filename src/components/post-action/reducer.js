import { OPEN_POST_ACTIONS } from './constants';

const initialState = {
  openPost: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case OPEN_POST_ACTIONS:
      return {
        ...state,
        openPost: action.payload,
      };
    default:
      return state;
  }
}
