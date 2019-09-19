import { OPEN_POST_ACTIONS, POST_ANIMATION_TOGGLE, POST_ANIMATION_END } from "./constants";

export const openPostAction = (post) => ({
  type: OPEN_POST_ACTIONS,
  payload: post,
});

export const postAnimatingToogle = (on) => ({
  type: POST_ANIMATION_TOGGLE,
  payload: on,
});

