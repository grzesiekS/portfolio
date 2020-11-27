/* SELECTORS */
export const getProjects = ({myProjects}) => myProjects.projects;
export const getProjectsData = ({myProjects, globalSettings}) =>
  myProjects.data.filter(data => data.language === globalSettings.globalLanguage)[0];

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
