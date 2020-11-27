import {connect} from 'react-redux';
import MyProjects from './MyProjects';
import {getProjects, getProjectsData} from '../../../redux/myProjectsRedux';
import { getLanguage } from '../../../redux/globalSettingsRedux';

const mapStateToProps = state => ({
  title: getProjectsData(state).title,
  description: getProjectsData(state).description,
  projects: getProjects(state),
  globalLanguage: getLanguage(state),
});

export default connect(mapStateToProps)(MyProjects);
