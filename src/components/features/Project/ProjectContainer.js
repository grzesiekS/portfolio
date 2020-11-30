import {connect} from 'react-redux';
import Project from './Project';

import {getFilterSkills, getFilterTech} from '../../../redux/skillTechRedux';

const mapStateToProps = (state, props) => ({
  skillsList: getFilterSkills(state, props.skills),
  techList: getFilterTech(state, props.tech),
});

export default connect(mapStateToProps)(Project);
