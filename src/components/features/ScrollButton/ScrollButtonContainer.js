import {connect} from 'react-redux';

import {getScrollButtonDisplayPosition} from '../../../redux/globalSettingsRedux';

import ScrollButton from './ScrollButton';

const mapStateToProps = state => ({
  scrollButtonDisplayPosition: getScrollButtonDisplayPosition(state),
});

export default connect(mapStateToProps)(ScrollButton);