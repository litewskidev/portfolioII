import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import initialState from "./initialState.js";
import languageReducer from "./languageRedux.js";
import projectsReducer from "./projectsRedux.js";

const subreducers = {
  language: languageReducer,
  projects: projectsReducer
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;
