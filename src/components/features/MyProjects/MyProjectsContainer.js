import {connect} from 'react-redux';
import MyProjects from './MyProjects';
import {getProjectsTitle, getProjects, getProjectsDesc} from '../../../redux/myProjectsRedux';

const mapStateToProps = state => ({
  title: getProjectsTitle(state),
  description: getProjectsDesc(state),
  projects: getProjects(state),
});

export default connect(mapStateToProps)(MyProjects);
