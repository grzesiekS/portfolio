import Axios from 'axios';
import {API_URL} from '../config';

/* SELECTORS */
export const getSkills = ({skillTech}) => skillTech.skills;
export const getTech = ({skillTech}) => skillTech.technologies;
export const getSkillTechData = ({skillTech, globalSettings}) =>
  skillTech.data !== undefined ? skillTech.data.filter(data => data.language === globalSettings.data.globalLanguage)[0] : [];
export const getFilterSkills = ({skillTech}, skillsArray) =>
  skillTech.skills !== undefined ? skillTech.skills.filter(skill => skillsArray.indexOf(skill._id) !== -1) : [];
export const getFilterTech = ({skillTech}, techArray) =>
  skillTech.technologies !== undefined ? skillTech.technologies.filter(tech => techArray.indexOf(tech._id) !== -1) : [];
export const getLoadingStatus = ({skillTech}) => skillTech.loading;

/* ACTIONS */

// action name creator
const reducerName = 'skillTech';
const createActionName = name => `app/${reducerName}/${name}`;

// Action types
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

// action creators
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ ...payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

/* thunk creator */
export const fetchSkillTech = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios.all([
      Axios.get(`${API_URL}/skillTech/data`),
      Axios.get(`${API_URL}/skillTech/skills`),
      Axios.get(`${API_URL}/skillTech/tech`),
    ])
      .then(res => {
        const data = res[0].data;
        const skills = res[1].data;
        const tech = res[2].data;
        dispatch(fetchSuccess({data, skills, tech}));
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
        skills: action.skills,
        technologies: action.tech,
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
