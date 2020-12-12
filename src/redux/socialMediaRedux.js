/* SELECTORS */

export const getSocialMediaList = ({socialMedia}) => socialMedia.data;
export const getSocialMediaTitle = ({socialMedia, globalSettings}) => 
  socialMedia.title.filter(title => title.language === globalSettings.data.globalLanguage)[0].titleName;

/* ACTIONS */

// actiona name creator
// const reducerName = 'socialMedia';
// const createActionName = name => `app/${reducerName}/${name}`;

// Action Type

// Action creator

// reducer
export default function reducer(statePart = [], actiona={}) {
  switch(actiona.type){
    default:
      return statePart;
  }
}