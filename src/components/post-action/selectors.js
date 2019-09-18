import { statePath } from "./constants";

const selectPostActionsState = state => state[statePath];

export const selectOpenPost = (state) => selectPostActionsState(state).openPost;
