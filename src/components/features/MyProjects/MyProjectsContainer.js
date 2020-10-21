import {connect} from 'react-redux';
import MyProjects from './MyProjects';
import {getProjectsTitle, getProjects} from '../../../redux/myProjectsRedux';

const mapStateToProps = state => ({
  title: getProjectsTitle(state),
  projects: getProjects(state),
});

export default connect(mapStateToProps)(MyProjects);
