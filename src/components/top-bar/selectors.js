import { statePath } from "./constants";

const selectTopBarState = state => state[statePath];

export const selectSearchText = state => selectTopBarState(state).searchText;