import {connect} from 'react-redux';

import {getFormData} from '../../../redux/formsRedux';
import {getLanguage} from '../../../redux/globalSettingsRedux';

import ContactForm from './ContactForm';

const mapStateToProps = state => ({
  formData: getFormData(state),
  language: getLanguage(state),
});

export default connect(mapStateToProps)(ContactForm);