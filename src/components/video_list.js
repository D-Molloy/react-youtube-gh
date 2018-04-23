//no need for state since its only receiving data, so its a plan functional component
import React from 'react';
import VideoListItem from './video_list_item';


// props coming from index.js
//because this is a function component(no state) we can just reference props.  In a class component (that has the state property), we need to reference it as this.props
const VideoList = (props) => {
    const videoItems = props.videos.map((video)=>{
        return <VideoListItem 
        key={video.etag} 
        video={video} 
        onVideoSelect={props.onVideoSelect} />
    })
    return(
        <ul className='col-md-4 list-group'>
            {videoItems}
        </ul>
    );
};

export default VideoList;