import {connect} from 'react-redux';

import TopBar from './TopBar';

import {getLanguagesList, getLanguage, changeLanguage} from '../../../redux/globalSettingsRedux';

const mapStateToProps = state => ({
  languageList: getLanguagesList(state),
  selectedLanguage: getLanguage(state),
});

const mapDispatchToProps = dispatch => ({
  changeLanguage: lang => dispatch(changeLanguage(lang)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);

