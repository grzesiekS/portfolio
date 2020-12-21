import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContactForm.module.scss';
import Option from '../Option/Option';
import Button from '../../common/Button/Button';
import Load from '../../common/Load/Load';

class ContactForm extends React.Component {

  componentDidMount() {
    const {fetchFormData} = this.props;

    fetchFormData();
  }

  render() {
    const {formData, language, changeInputValue, loadingStatus} = this.props;

    return (
      loadingStatus === undefined || loadingStatus.active
        ?
        loadingStatus === undefined || loadingStatus.error ? null : <Load />
        :
        loadingStatus === undefined || loadingStatus.error ? null :
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
  changeInputValue: PropTypes.func,
  fetchFormData: PropTypes.func,
  loadingStatus: PropTypes.object,
};

ContactForm.defaultProps = {
  formData: [],
  fetchFormData: () => {},
};

export default ContactForm;
