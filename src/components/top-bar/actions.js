import { SEARCH_TEXT_CHANGED } from "./constants";

export const onTextChange = (text) => ({
  type: SEARCH_TEXT_CHANGED,
  payload: text
});
