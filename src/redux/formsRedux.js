/* SELECTORS */
export const getFormData = ({forms}) => forms.data;

/* ACTIONS */
// action name creator
const reducerName = 'forms';
const createActionName = name => `app/${reducerName}/${name}`;

// Action types
const CHANGE_INPUT_VALUE = createActionName('CHANGE_INPUT_VALUE');

// Action creators
export const changeInputValue = payload => ({ ...payload, type: CHANGE_INPUT_VALUE });

// reducer
export default function reducer(statePart = [], action = []) {
  switch(action.type) {
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
    default:
      return statePart;
  }
}