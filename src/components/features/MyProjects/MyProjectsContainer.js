import {connect} from 'react-redux';
import MyProjects from './MyProjects';
import {
  getProjects, 
  getProjectsData, 
  fetchProjects, 
  getLoadingStatus} from '../../../redux/myProjectsRedux';
import { getLanguage } from '../../../redux/globalSettingsRedux';

const mapStateToProps = state => ({
  title: getProjectsData(state).title,
  description: getProjectsData(state).description,
  projects: getProjects(state),
  globalLanguage: getLanguage(state),
  loadingStatus: getLoadingStatus(state),
});

const mapDispatchToProps = dispatch => ({
  getProjectsData: () => dispatch(fetchProjects()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyProjects);
