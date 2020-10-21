/* SELECTORS */
export const getProjectsTitle = ({myProjects}) => myProjects.title;
export const getProjectsDesc = ({myProjects}) => myProjects.description;
export const getProjects = ({myProjects}) => myProjects.projects;

/* ACTIONS */

// action name creator
// const reducerName = 'myProjects';
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
