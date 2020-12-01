/* SELECTORS */

/* ACTIONS */
export const getLanguage = ({globalSettings}) => globalSettings.data.globalLanguage;
export const getLanguagesList = ({globalSettings}) => globalSettings.data.languages;

// action name creator
// const reducerName = 'globalSettings';
// const createActionName = name => `app/${reducerName}/${name}`;

// Action types

// Action creators

// reducer
export default function reducer(statePart = [], action =[]) {
  switch(action.type) {
    default:
      return statePart;
  }
}
