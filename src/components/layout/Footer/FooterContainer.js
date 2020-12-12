import {connect} from 'react-redux';

import {getSocialMediaList, getSocialMediaTitle} from '../../../redux/socialMediaRedux';

import Footer from './Footer';

export const mapStateToProps = state => ({
  socialMediaList: getSocialMediaList(state),
  title: getSocialMediaTitle(state),
});

export default connect(mapStateToProps)(Footer);