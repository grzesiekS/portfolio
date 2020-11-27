/* SELECTORS */

export const getEnAboutMe = ({aboutMe, globalSettings}) => aboutMe.filter(about => about.language === globalSettings.globalLanguage);

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
