import {connect} from 'react-redux';
import SkillTechList from './SkillTechList';
import {getSkills, getTech, getSkillTechData, fetchSkillTech, getLoadingStatus} from '../../../redux/skillTechRedux';

const mapStateToProps = state => ({
  skills: getSkills(state),
  techs: getTech(state),
  title: getSkillTechData(state).title,
  skillTitle: getSkillTechData(state).skillTitle,
  techTitle: getSkillTechData(state).techTitle,
  loadingStatus: getLoadingStatus(state),
});

const mapDispatchToProps = dispatch => ({
  fetchSkillTech: () => dispatch(fetchSkillTech()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillTechList);
