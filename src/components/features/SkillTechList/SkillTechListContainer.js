import {connect} from 'react-redux';
import SkillTechList from './SkillTechList';
import {getSkills, getTech, getSkillTechData} from '../../../redux/skillTechRedux';

const mapStateToProps = state => ({
  skills: getSkills(state),
  techs: getTech(state),
  title: getSkillTechData(state).title,
  skillTitle: getSkillTechData(state).skillTitle,
  techTitle: getSkillTechData(state).techTitle,
});

export default connect(mapStateToProps)(SkillTechList);
