import {connect} from 'react-redux';

import {getSocialMediaList, getSocialMediaTitle, fetchSocialMedia} from '../../../redux/socialMediaRedux';

import Footer from './Footer';

const mapStateToProps = state => ({
  socialMediaList: getSocialMediaList(state),
  title: getSocialMediaTitle(state),
});

const mapDispatchToProps = dispatch => ({
  fetchSocialMedia: () => dispatch(fetchSocialMedia()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);