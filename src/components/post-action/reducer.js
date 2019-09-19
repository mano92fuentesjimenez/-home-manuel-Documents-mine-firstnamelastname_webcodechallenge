import { OPEN_POST_ACTIONS, POST_ANIMATION_TOGGLE, POST_ANIMATION_END } from './constants';

const initialState = {
  openPost: null,
  animatingPost: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case OPEN_POST_ACTIONS:
      return {
        ...state,
        openPost: action.payload,
      };
    case POST_ANIMATION_TOGGLE:
      return {
        ...state,
        animatingPost: action.payload,
      };
    default:
      return state;
  }
}
