import React from 'react';
import VideoItem from '../VideoItem';

const VideoGrid = ({ videos }) => {
  return (
    <ul>
      {videos.map((video) => (
        <li>
          <VideoItem {...video} key={video.id} />
        </li>
      ))}
    </ul>
  );
};

export default VideoGrid;
