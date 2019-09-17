import React from 'react';
import './App.css';
import TopBar from './components/top-bar';
import { Provider } from 'react-redux'
import reducers from './reducers';
import {combineReducers, createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import api from './api';
import PostList from "./components/post-list/post-list";

import { onSearchCommand } from './components/top-bar/actions';

const reducer = combineReducers(reducers);

function App() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));
  const services = {
    api,
  };
  sagas.forEach( saga => sagaMiddleware.run(saga, services));

  //It is a requirement
  store.dispatch(onSearchCommand('funny'));
  return (
    <Provider store={store}>
      <TopBar/>
      <PostList/>
    </Provider>
  );
}

export default App;
