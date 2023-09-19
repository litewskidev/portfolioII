//  SELECTORS
export const getFetchedLang = ({ language }) => language;
export const getProjectDesc = ({ language }, id) => language.descriptions?.filter(description => description.id === id);

//  ACTIONS
const createActionName = actionName => `app/language/${actionName}`;
const GET_LANG = createActionName('GET_LANG');

//  ACTION CREATORS
//  PL
export const getLangPl = payload => ({ type: GET_LANG, payload });
export const fetchLangPl = () => {
  return(dispatch) => {
    fetch("/api/language/pl")
    .then(res => res.json())
    .then(pl => { dispatch(getLangPl(pl)) })
    .catch(err => console.log(err));
  }
};

//  ENG
export const getLangEng = payload => ({ type: GET_LANG, payload });
export const fetchLangEng = () => {
  return(dispatch) => {
    fetch("/api/language/eng")
    .then(res => res.json())
    .then(eng => { dispatch(getLangEng(eng)) })
    .catch(err => console.log(err));
  }
};

const languageReducer = ( state = {}, action ) => {
  switch(action.type) {
    case GET_LANG:
      return { ...action.payload }
    default:
      return state
  }
};

export default languageReducer;
