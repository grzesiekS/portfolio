/* SELECTORS */
export const getLanguage = ({globalSettings}) => globalSettings.data.globalLanguage;
export const getLanguagesList = ({globalSettings}) => globalSettings.data.languages;
export const getScrollButtonDisplayPosition = ({globalSettings}) => globalSettings.data.scrollButtonDisplayPosition;

/* ACTIONS */

// action name creator
const reducerName = 'globalSettings';
const createActionName = name => `app/${reducerName}/${name}`;

// Action types
const CHANGE_LANGUAGE = createActionName('CHANGE_LANGUAGE');

// Action creators
export const changeLanguage = payload => ({ payload, type: CHANGE_LANGUAGE });

// reducer
export default function reducer(statePart = [], action =[]) {
  switch(action.type) {
    case CHANGE_LANGUAGE: {
      return {
        ...statePart,
        data: {
          ...statePart.data,
          globalLanguage: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
}
