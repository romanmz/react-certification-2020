import React from 'react';
import { Link } from 'react-router-dom';

const VideoItem = ({ id, title, description, thumbnail }) => {
  return (
    <div>
      <Link to={`/video/${id}`}>
        <img src={thumbnail} height="360" width="480" alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </div>
  );
};

export default VideoItem;
