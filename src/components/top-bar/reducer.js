import {
  SEARCH_TEXT_CHANGED,
  SEARCHING_POSTS_START,
  SEARCHING_POSTS_END,
  LOAD_POSTS,
  SEARCHING_POSTS_ERROR
} from "./constants";

const initialState = {
  searchText: '',
  posts: [],
  searching: false,
  error: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCHING_POSTS_START:
      return {
        searching: true,
      };
    case SEARCHING_POSTS_END:
      return {
        searching: false,
      };
    case LOAD_POSTS:{
      return {
        posts: action.payload,
      }
    }
    case SEARCHING_POSTS_ERROR:
      return {
        searching: false,
        error: action.payload,
      } ;
    case SEARCH_TEXT_CHANGED:
      return {
        searchText: action.payload,
      };
    default:
      return state;
  }
}
