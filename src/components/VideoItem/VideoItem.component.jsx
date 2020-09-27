import React from 'react';

const VideoItem = ({ id, title, description, thumbnail }) => {
  return (
    <div>
      <a href={`/video/${id}`}>
        <img src={thumbnail} height="360" width="480" alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </div>
  );
};

export default VideoItem;
