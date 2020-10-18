import {connect} from 'react-redux';
import SkillTechList from './SkillTechList';
import {getSkills, getTech, getSkillTechTitle, getSkillTitle, getTechTitle} from '../../../redux/skillTechRedux';

const mapStateToProps = state => ({
  skills: getSkills(state),
  techs: getTech(state),
  title: getSkillTechTitle(state),
  skillTitle: getSkillTitle(state),
  techTitle: getTechTitle(state),
});

export default connect(mapStateToProps)(SkillTechList);