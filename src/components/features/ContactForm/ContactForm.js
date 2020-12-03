import React from 'react';

import styles from './ContactForm.module.scss';
import Option from '../Option/Option';

class ContactForm extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <form>
          <Option
            type='input'
            inputType='text'
            title={'Name'}
          />
          <Option
            type='input'
            inputType='text'
            title={'Last Name'}
          />
          <Option
            type='input'
            inputType='email'
            title={'Last Name'}
          />
          <Option
            type='input'
            inputType='tel'
            title={'Phone Number'}
          />
          <Option
            type='textarea'
            title={'Message'}
          />
        </form>
      </div>
    );
  }
}

export default ContactForm;
