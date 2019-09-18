import { OPEN_POST_ACTIONS } from "./constants";

export const openPostAction = (post) => ({
  type: OPEN_POST_ACTIONS,
  payload: post,
});
