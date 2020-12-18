import {connect} from 'react-redux';
import AboutMe from './AboutMe';
import {getEnAboutMe, fetchAboutMe, getLoadingStatus} from '../../../redux/aboutMeRedux';

const mapStateToProps = state => ({
  content: getEnAboutMe(state),
  loadingStatus: getLoadingStatus(state),
});

const mapDispatchToProps = dispatch => ({
  getAboutMeData: () => dispatch(fetchAboutMe()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutMe);
