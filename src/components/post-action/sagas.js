import { takeEvery, call } from 'redux-saga/effects';
import { POST_ACTION } from "./constants";

function* applyAction(action) {
  const { actionName, post } = action.payload;

  switch (actionName) {
    case 'link':
      yield call(window.open, `http://www.reddit.com${post.permalink}`, '_blank');

  }
}

export default function* ({ api }) {
  yield takeEvery(POST_ACTION ,applyAction)
};
