import {combineReducers, createStore} from 'redux';
import aboutMeData from '../data/aboutMe.json';
import skillTechData from '../data/skillTech.json';
import myProjectsData from '../data/myProjects.json';

import globalReducer from './globalRedux';
import aboutMeReducer from './aboutMeRedux';
import skillTechReducer from './skillTechRedux';
import myProjectsReducer from './myProjectsRedux';

const initialState = {
  aboutMe: aboutMeData,
  skillTech: skillTechData,
  myProjects: myProjectsData,
};

// define reducers
const reducers = {
  aboutMe: aboutMeReducer,
  skillTech: skillTechReducer,
  myProjects: myProjectsReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

// combine reducers
const combinedReducers = combineReducers(reducers);

// merge all reducers with globalReducer
const storeReducer = (state, action) => {
  const modifiedState = globalReducer(state, action);
  return combinedReducers(modifiedState, action);
};

// create store
const store = createStore(
  storeReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
