import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import reducers from './reducers';
import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import api from './api';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import TopBar from './components/top-bar';
import PostList from "./components/post-list/post-list";
import PostActions from './components/post-action'

import { onSearchCommand } from './components/top-bar/actions';

const reducer = combineReducers(reducers);

function App() {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
  const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
  const store = createStore(reducer, enhancer);
  const services = {
    api,
  };
  sagas.forEach( saga => sagaMiddleware.run(saga, services));

  //It is a requirement
  store.dispatch(onSearchCommand('funny'));
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <TopBar/>
        <PostList/>
        <PostActions/>
      </DndProvider>
    </Provider>
  );
}

export default App;
