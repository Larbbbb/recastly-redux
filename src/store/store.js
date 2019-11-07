import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

let intitalState = {
  currentVideo: null,
  videoList: exampleVideoData
};

const store = createStore(rootReducer, intitalState, applyMiddleware(thunk));

export default store;
