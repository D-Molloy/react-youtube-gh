import _ from 'lodash';

import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyAQYiNuD6trK-giyef9h6J44-uUymn-6T0";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      term:''
    }

    this.videoSearch('coding')
 
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term+" ambient music"}, (videos) =>{
 
      this.setState({
        videos : videos,
        selectedVideo: videos[0],
        term: term
      })

    });     
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)
    return (
      <div>
        <SearchBar
         onSearchTermChange={videoSearch} />
         <hr />
         <h5 id="detail_result_title">Showing results for: "{this.state.term}"</h5>
        <VideoDetail
        video={this.state.selectedVideo}  />
        <VideoList 
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos}/>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector(".container"));
