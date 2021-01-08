import {connect} from 'react-redux';

import {
  getFormData, 
  changeInputValue, 
  fetchFormData, 
  getLoadingStatus,
  sendEmail,
  getPostStatus,
} from '../../../redux/formsRedux';

import {
  getLanguage,
  getModalData,
  modalSuccess,
  modalError,
  modalDisable,
} from '../../../redux/globalSettingsRedux';

import ContactForm from './ContactForm';

const mapStateToProps = state => ({
  formData: getFormData(state),
  language: getLanguage(state),
  loadingStatus: getLoadingStatus(state),
  postStatus: getPostStatus(state),
  modalDisplay: getModalData(state).display,
});

const mapDispatchToProps = dispatch => ({
  changeInputValue: (id, newValue) => dispatch(changeInputValue({id, newValue})),
  fetchFormData: () => dispatch(fetchFormData()),
  sendEmail: (name, lastName, email, phoneNo, subject, message) => dispatch(sendEmail({name, lastName, email, phoneNo, subject, message})),
  modalSuccess: msg => dispatch(modalSuccess({msg})),
  modalError: msg => dispatch(modalError({msg})),
  modalDisable: () => dispatch(modalDisable()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);