import { SEARCH_TEXT_CHANGED } from "./constants";

const initialState = {
  searchText: '',
  itemsFound: [],
  searching: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_TEXT_CHANGED:
      return {
        searchText: action.payload,
      };
    default:
      return state;
  }
}
