import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContactForm.module.scss';
import Option from '../Option/Option';
import Button from '../../common/Button/Button';

class ContactForm extends React.Component {
  render() {
    const {formData, language} = this.props;

    return (
      <div className={styles.container}>
        <form>
          {formData.map(data => (
            <Option
              key={data._id}
              type={data.type}
              inputType={data.inputType}
              title={data.titles.filter(title => title.language === language)[0].title}
            />
          ))}
          <Button Type='div' animation={true}>
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
};

export default ContactForm;
