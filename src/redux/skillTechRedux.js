/* SELECTORS */
export const getSkills = ({skillTech}) => skillTech.skills;
export const getTech = ({skillTech}) => skillTech.technologies;
export const getSkillTechTitle = ({skillTech}) => skillTech.title;
export const getSkillTitle = ({skillTech}) => skillTech.skillTitle;
export const getTechTitle = ({skillTech}) => skillTech.techTitle;

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