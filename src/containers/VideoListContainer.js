import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

let mapStateToProps = (state) => {
  return {videos: state.videoList};
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleVideoListEntryTitleClick: (param) => {
      dispatch(changeVideo(param));
    }
  };
};

var VideoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList);

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;
