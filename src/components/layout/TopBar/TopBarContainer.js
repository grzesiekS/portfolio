import {connect} from 'react-redux';

import TopBar from './TopBar';

import {getLanguagesList, getLanguage} from '../../../redux/globalSettingsRedux';

const mapStateToProps = state => ({
  languageList: getLanguagesList(state),
  selectedLanguage: getLanguage(state),
});

export default connect(mapStateToProps)(TopBar);

