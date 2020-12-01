/* SELECTORS */

export const getEnAboutMe = ({aboutMe, globalSettings}) =>
  aboutMe.data.filter(about => about.language === globalSettings.data.globalLanguage);

/* ACTIONS */

// action name creator
// const reducerName = 'aboutMe';
// const createActionName = name => `app/${reducerName}/${name}`;

// Action types

// action creators

//reducer
export default function reducer(statePart = [], action ={}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
