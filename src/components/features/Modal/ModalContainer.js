import {connect} from 'react-redux';

import { getModalData } from '../../../redux/globalSettingsRedux';

import Modal from './Modal';

const mapStateToProps = state => ({
  type: getModalData(state).type,
  display: getModalData(state).display,
  msg: getModalData(state).msg,
});

export default connect(mapStateToProps)(Modal);