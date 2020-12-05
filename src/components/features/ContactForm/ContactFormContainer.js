import {connect} from 'react-redux';

import {getFormData, changeInputValue} from '../../../redux/formsRedux';
import {getLanguage} from '../../../redux/globalSettingsRedux';

import ContactForm from './ContactForm';

const mapStateToProps = state => ({
  formData: getFormData(state),
  language: getLanguage(state),
});

const mapDispatchToProps = dispatch => ({
  changeInputValue: (id, newValue) => dispatch(changeInputValue({id, newValue})),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);