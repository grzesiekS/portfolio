import Axios from 'axios';
import {API_URL} from '../config';

/* SELECTORS */

export const getSocialMediaList = ({socialMedia}) => socialMedia.data;
export const getSocialMediaTitle = ({socialMedia, globalSettings}) => 
  socialMedia.title !== undefined 
    ? socialMedia.title.filter(title => title.language === globalSettings.data.globalLanguage)[0].titleName
    : null;

/* ACTIONS */

// actiona name creator
const reducerName = 'socialMedia';
const createActionName = name => `app/${reducerName}/${name}`;

// Action Type
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

// Action creator
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ ...payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

/* thunk creators */
export const fetchSocialMedia = () => {
  return(dispatch, getState) => {
    dispatch(fetchSuccess());

    Axios.all([
      Axios.get(`${API_URL}/socialMedia/title`),
      Axios.get(`${API_URL}/socialMedia/data`),
    ])
      .then(res => {
        const title = res[0].data;
        const data = res[1].data;
        dispatch(fetchSuccess({title, data}));
      })
      .catch(err => {
        dispatch(fetchError(err.message || false));
      });
  };
};

// reducer
export default function reducer(statePart = [], action = {}) {
  switch(action.type){
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
        title: action.title,
        data: action.data,
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