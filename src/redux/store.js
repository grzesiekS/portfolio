import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import globalSettingsData from '../data/globalSettings.json';

import globalReducer from './globalRedux';
import aboutMeReducer from './aboutMeRedux';
import skillTechReducer from './skillTechRedux';
import myProjectsReducer from './myProjectsRedux';
import globalSettingsReducer from './globalSettingsRedux';
import formsReducer from './formsRedux';
import socialMediaReducer from './socialMediaRedux';

const initialState = {
  globalSettings: globalSettingsData,
};

// define reducers
const reducers = {
  aboutMe: aboutMeReducer,
  skillTech: skillTechReducer,
  myProjects: myProjectsReducer,
  globalSettings: globalSettingsReducer,
  forms: formsReducer,
  socialMedia: socialMediaReducer,
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
  composeWithDevTools(
    applyMiddleware(thunk)
  ),
);

export default store;
