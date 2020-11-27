/* SELECTORS */
export const getSkills = ({skillTech}) => skillTech.skills;
export const getTech = ({skillTech}) => skillTech.technologies;
export const getSkillTechData = ({skillTech, globalSettings}) =>
  skillTech.data.filter(data => data.language === globalSettings.globalLanguage)[0];

/* ACTIONS */

// action name creator
// const reducerName = 'skillTech';
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
