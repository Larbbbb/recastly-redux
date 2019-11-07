import React from 'react';
import store from '../store/store.js';
import handleVideoSearch from '../actions/search.js';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleInputChange(e) {
    // this.props.getYouTubeVideos(e.target.value);
    this.setState({
      value: e.target.value
    }, () => {
      store.dispatch(handleVideoSearch(this.state.value));
    });
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default Search;
