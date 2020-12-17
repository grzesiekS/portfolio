import Axios from 'axios';
import {API_URL} from '../config';

/* SELECTORS */

export const getEnAboutMe = ({aboutMe, globalSettings}) =>
  aboutMe.data !== undefined
    ?
    aboutMe.data.filter(about => about.language === globalSettings.data.globalLanguage)
    :
    [];

export const getLoadingStatus = ({aboutMe}) => aboutMe.loading;

/* ACTIONS */

// action name creator
const reducerName = 'aboutMe';
const createActionName = name => `app/${reducerName}/${name}`;

// Action types
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

// action creators
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

/* thunk creators */
export const fetchAboutMe = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`${API_URL}/aboutMe`)
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || false));
      });
  };
};

//reducer
export default function reducer(statePart = [], action ={}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
}
