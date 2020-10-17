import {connect} from 'react-redux';
import SkillTechList from './SkillTechList';
import {getSkills, getTech} from '../../../redux/skillTechRedux';

const mapStateToProps = state => ({
  skills: getSkills(state),
  techs: getTech(state),
});

export default connect(mapStateToProps)(SkillTechList);