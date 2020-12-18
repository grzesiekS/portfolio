import {connect} from 'react-redux';

import {
  getFormData, 
  changeInputValue, 
  fetchFormData, 
  getLoadingStatus,
} from '../../../redux/formsRedux';

import {getLanguage} from '../../../redux/globalSettingsRedux';

import ContactForm from './ContactForm';

const mapStateToProps = state => ({
  formData: getFormData(state),
  language: getLanguage(state),
  loadingStatus: getLoadingStatus(state),
});

const mapDispatchToProps = dispatch => ({
  changeInputValue: (id, newValue) => dispatch(changeInputValue({id, newValue})),
  fetchFormData: () => dispatch(fetchFormData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);