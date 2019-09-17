import { SEARCH_TEXT_CHANGED, SEARCH_COMMAND } from "./constants";
import { onLoadPosts, onSearchEnd, onSearchError, onSearchStarted } from './actions';
import { takeLatest, call, delay, put } from 'redux-saga/effects';
import _ from 'lodash';

function* searchPosts(api, action) {
  const text = action.payload;
  yield put(onSearchStarted());
  try {
    const postData = yield call(api.getPosts, text);
    yield put(onSearchEnd());

    if (postData.data) {
      const posts = _.map(postData.data.data.children, data => _.pick(data.data, ['title', 'author_fullname', 'num_comments', 'thumbnail', 'ups', 'downs']));
      yield put(onLoadPosts(posts));
    }
  }
  catch (e) {
    yield put(onSearchError(e));
  }
}

function* onTextChanged(api, action) {
  yield delay(500);
  yield searchPosts(api, action);
}

export default function* ({ api }) {
  yield takeLatest(SEARCH_TEXT_CHANGED, onTextChanged, api);
  yield takeLatest(SEARCH_COMMAND, searchPosts, api);
};
