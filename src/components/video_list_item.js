import React from "react";

// destructure the props.video and save them to video
const VideoListItem = ({ video, onVideoSelect }) => {
  // dont need below because we destructed props
  // const video = props.video;
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li 
    className="list-group-item"
    onClick={() => onVideoSelect(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">
          <b>{video.snippet.title}</b>
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
