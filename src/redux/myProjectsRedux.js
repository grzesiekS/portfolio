import Axios from 'axios';
import {API_URL} from '../config';

/* SELECTORS */
export const getProjects = ({myProjects}) => myProjects.projects;
export const getProjectsData = ({myProjects, globalSettings}) =>
  myProjects.data !== undefined ? myProjects.data.filter(data => data.language === globalSettings.data.globalLanguage)[0] : [];
export const getLoadingStatus = ({myProjects}) => myProjects.loading;

/* ACTIONS */

// action name creator
const reducerName = 'myProjects';
const createActionName = name => `app/${reducerName}/${name}`;

// Action types
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

// action creators
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ ...payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

/* thunk creators */
export const fetchProjects = () => {
  return (dispatch, getState) => {
    dispatch(fetchSuccess());

    Axios.all([
      Axios.get(`${API_URL}/myProjects/data`),
      Axios.get(`${API_URL}/myProjects/projects`),
    ])
      .then(res => {
        const data = res[0].data;
        const projects = res[1].data;
        dispatch(fetchSuccess({data, projects}));
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
        data: action.data,
        projects: action.projects,
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
