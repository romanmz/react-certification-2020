import React from 'react';
import styled from 'styled-components';
import VideoCard from '../VideoCard';

const VideoGridContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  li {
    flex: 0 0 50%;
  }
`;

const VideoGrid = ({ videos }) => {
  return (
    <VideoGridContainer>
      {videos.map((video) => (
        <li key={video.id}>
          <VideoCard {...video} />
        </li>
      ))}
    </VideoGridContainer>
  );
};

export default VideoGrid;
