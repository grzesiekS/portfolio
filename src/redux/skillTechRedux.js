/* SELECTORS */
export const getSkills = ({skillTech}) => skillTech.skills;
export const getTech = ({skillTech}) => skillTech.technologies;
export const getSkillTechData = ({skillTech, globalSettings}) =>
  skillTech.data.filter(data => data.language === globalSettings.data.globalLanguage)[0];
export const getFilterSkills = ({skillTech}, skillsArray) =>
  skillTech.skills.filter(skill => skillsArray.indexOf(skill._id) !== -1);
export const getFilterTech = ({skillTech}, techArray) =>
  skillTech.technologies.filter(tech => techArray.indexOf(tech._id) !== -1);

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
