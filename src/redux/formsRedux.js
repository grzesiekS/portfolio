import Axios from 'axios';
import {API_URL} from '../config';

/* SELECTORS */
export const getFormData = ({forms}) => forms.data;
export const getLoadingStatus = ({forms}) => forms.loading;
export const getPostStatus = ({forms}) => forms.postLoading;

/* ACTIONS */
// action name creator
const reducerName = 'forms';
const createActionName = name => `app/${reducerName}/${name}`;

// Action types
const CHANGE_INPUT_VALUE = createActionName('CHANGE_INPUT_VALUE');
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const POST_START = createActionName('POST_START');
const POST_SUCCESS = createActionName('POST_SUCCESS');
const POST_ERROR = createActionName('POST_ERROR');

// Action creators
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const changeInputValue = payload => ({ ...payload, type: CHANGE_INPUT_VALUE });
export const postStarted = payload => ({ payload, type: POST_START });
export const postSuccess = payload => ({ payload, type: POST_SUCCESS });
export const postError = payload => ({ payload, type: POST_ERROR });

/* thunk creators */
export const fetchFormData = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`${API_URL}/forms`)
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || false));
      });
  };
};

export const sendEmail = post => {
  return async dispatch => {
    dispatch(postStarted());

    try {
      let res = await Axios.post(`${API_URL}/forms/send-email`, post);
      await new Promise(resolve => resolve());

      if(res.data.message === 'email sent') {
        dispatch(postSuccess());
      } else {
        dispatch(postError(false));
      }
      
    } catch(err) {
      dispatch(postError(err.message || false));
    }
  };
};

// reducer
export default function reducer(statePart = [], action = []) {
  switch(action.type) {
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
    case CHANGE_INPUT_VALUE: {
      return {
        ...statePart,
        data: statePart.data
          .map(data => 
            data._id === action.id 
              ? {
                ...data,
                value: action.newValue,
              }
              : {...data}),
      };
    }
    case POST_START: {
      return {
        ...statePart,
        postLoading: {
          active: true,
          error: false,
        },
      };
    }
    case POST_SUCCESS: {
      const newData = statePart.data.map(dataPart => {
        return {
          ...dataPart,
          value: '',
        };
      });
      return {
        ...statePart,
        data: newData,
        postLoading: {
          active: false,
          error: false,
        },
      };
    }
    case POST_ERROR: {
      return {
        ...statePart,
        postLoading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
}