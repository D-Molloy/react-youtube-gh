import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div>
          <p id="detail_title">{video.snippet.title}</p>
        </div>
        <div>
         <p id="detail_descrip">{video.snippet.description}</p>
         </div>
      </div>
    </div>
  );
};

export default VideoDetail;
