/* SELECTORS */

export const getEnAboutMe = ({aboutMe}) => aboutMe.filter(about => about.language === 'EN');

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
