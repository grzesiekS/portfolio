import {connect} from 'react-redux';
import AboutMe from './AboutMe';
import {getEnAboutMe} from '../../../redux/aboutMeRedux';

const mapStateToProps = state => ({
  content: getEnAboutMe(state),
});

export default connect(mapStateToProps)(AboutMe);
