/* SELECTORS */
export const getLanguage = ({globalSettings}) => globalSettings.data.globalLanguage;
export const getLanguagesList = ({globalSettings}) => globalSettings.data.languages;
export const getScrollButtonDisplayPosition = ({globalSettings}) => globalSettings.data.scrollButtonDisplayPosition;
export const getModalData = ({globalSettings}) => globalSettings.modal;

/* ACTIONS */

// action name creator
const reducerName = 'globalSettings';
const createActionName = name => `app/${reducerName}/${name}`;

// Action types
const CHANGE_LANGUAGE = createActionName('CHANGE_LANGUAGE');
const MODAL_SUCCESS = createActionName('MODAL_SUCCESS');
const MODAL_ERROR = createActionName('MODAL_ERROR');
const MODAL_DISABLE = createActionName('MODAL_DISABLE');

// Action creators
export const changeLanguage = payload => ({ payload, type: CHANGE_LANGUAGE });
export const modalSuccess = payload => ({ ...payload, type: MODAL_SUCCESS });
export const modalError = payload => ({ ...payload, type: MODAL_ERROR });
export const modalDisable = payload => ({ ...payload, type: MODAL_DISABLE });

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
    case MODAL_SUCCESS: {
      return {
        ...statePart,
        modal: {
          ...statePart.modal,
          type: 'success',
          display: true,
          msg: action.msg,
        },
      };
    }
    case MODAL_ERROR: {
      return {
        ...statePart,
        modal: {
          ...statePart.modal,
          type: 'error',
          display: true,
          msg: action.msg,
        },
      };
    }
    case MODAL_DISABLE: {
      return {
        ...statePart,
        modal: {
          ...statePart.modal,
          type: '',
          display: false,
          msg: '',
        },
      };
    }
    default:
      return statePart;
  }
}
