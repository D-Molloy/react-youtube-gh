//lodash (debounce) only runs every 300 seconds to prevent the videosearch from happening with every key
import _ from 'lodash';

import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyAQYiNuD6trK-giyef9h6J44-uUymn-6T0";


// Component - something that produces HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('the wedge')
 
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) =>{
      //destructuring (ES6) the response and saving it to videos
      this.setState({
        videos : videos,
        selectedVideo: videos[0],
      })
      //same as: ---key and value must have the same name
      // this.setState({videos: videos})
    });     
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)
    return (
      <div>
        <SearchBar
         onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}  />
        <VideoList 
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos}/>
      </div>
    );
  }
}

//  Take this component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector(".container"));
