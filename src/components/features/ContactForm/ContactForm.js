import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContactForm.module.scss';
import Option from '../Option/Option';
import Button from '../../common/Button/Button';
import Load from '../../common/Load/Load';

class ContactForm extends React.Component {
  state = {
    formInputError: [],
  }

  addFormInputError = id => {
    const newErrorInput = this.state.formInputError;
    if(this.state.formInputError.indexOf(id) === -1) {
      newErrorInput.push(id);
    }

    this.setState({
      ...this.state,
      formInputError: newErrorInput,
    });
  }

  handleEmailSend = () => {
    const { sendEmail, formData, modalError } = this.props;
    const emailData = {
      name: {
        _id: formData[0]._id,
        value: formData[0].value,
      },
      lastName: {
        _id: formData[1]._id,
        value: formData[1].value,
      },
      email: {
        _id: formData[2]._id,
        value: formData[2].value,
      },
      phoneNo: {
        _id: formData[3]._id,
        value: formData[3].value,
      },
      subject: {
        _id: formData[4]._id,
        value: formData[4].value,
      },
      message: {
        _id: formData[5]._id,
        value: formData[5].value,
      },
    };

    if(emailData.name.value
      && emailData.lastName.value
      && emailData.email.value
      && emailData.email.value.split('@').length === 2
      && emailData.email.value.split('.').length === 2
      && emailData.email.value.split('.')[1] !== ''
      && emailData.email.value.indexOf(' ') === -1
      && emailData.phoneNo.value
      && emailData.subject.value
      && emailData.message.value
    ) {
      sendEmail(
        emailData.name.value,
        emailData.lastName.value,
        emailData.email.value,
        emailData.phoneNo.value,
        emailData.subject.value,
        emailData.message.value
      );
    } else {
      if(!emailData.name.value) this.addFormInputError(emailData.name._id);
      if(!emailData.lastName.value) this.addFormInputError(emailData.lastName._id);
      if(!emailData.email.value
        || emailData.email.value.split('@').length !== 2
        || emailData.email.value.split('.').length !== 2
        || emailData.email.value.split('.')[1] === ''
        || emailData.email.value.indexOf(' ') !== -1) this.addFormInputError(emailData.email._id);
      if(!emailData.phoneNo.value) this.addFormInputError(emailData.phoneNo._id);
      if(!emailData.subject.value) this.addFormInputError(emailData.subject._id);
      if(!emailData.message.value) this.addFormInputError(emailData.message._id);
      modalError('Something went wrong...');
    }

  }

  handleInputError = id => {
    if(this.state.formInputError.indexOf(id) !== -1) return true;
    else return false;
  }

  componentDidMount() {
    const {fetchFormData} = this.props;

    fetchFormData();
  }

  componentDidUpdate() {
    const { modalDisplay, modalDisable } = this.props;

    if(modalDisplay) {
      setTimeout(() => {
        modalDisable();
      }, 4000);
    }
  }

  render() {
    const {formData, language, changeInputValue, loadingStatus, postStatus} = this.props;

    return (
      loadingStatus === undefined || loadingStatus.active
        ?
        loadingStatus === undefined || loadingStatus.error ? null : <Load />
        :
        loadingStatus === undefined || loadingStatus.error ? null :
          postStatus !== undefined && postStatus.active ? <Load />
            :
            <div className={styles.container}>
              <form>
                {formData.map(data => (
                  <Option
                    key={data._id}
                    id={data._id}
                    value={data.value}
                    type={data.type}
                    inputType={data.inputType}
                    title={data.titles.filter(title => title.language === language)[0].title}
                    setOptionValue={(id, newVaule) => changeInputValue(id, newVaule)}
                    error={this.handleInputError(data._id)}
                  />
                ))}
                <Button 
                  Type='div' 
                  animation={true}
                  onClick={() => this.handleEmailSend()}
                >
                  Send Message
                </Button>
              </form>
            </div>
    );
  }
}

ContactForm.propTypes = {
  formData: PropTypes.array,
  language: PropTypes.string,
  changeInputValue: PropTypes.func,
  fetchFormData: PropTypes.func,
  loadingStatus: PropTypes.object,
  sendEmail: PropTypes.func,
  postStatus: PropTypes.object,
  modalDisplay: PropTypes.bool,
  modalError: PropTypes.func,
  modalDisable: PropTypes.func,
};

ContactForm.defaultProps = {
  formData: [],
  fetchFormData: () => {},
};

export default ContactForm;
