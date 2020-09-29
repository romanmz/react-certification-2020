import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const VideoItemContainer = styled.div`
  a {
    display: flex;
    align-items: flex-start;
    margin: 2rem;
    background: white;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

    text-decoration: none;
    color: ${(props) => props.theme.color.text};
    transition: all 0.5s;
  }
  a:hover {
    background: #eee;
    transform: translateY(-1rem);
  }
  img {
    flex: 0 0 50%;
    min-width: 0;
    height: auto;
  }
  div {
    flex: auto;
    padding: 2rem;
  }
`;

const VideoItem = ({ id, title, description, thumbnail }) => {
  return (
    <VideoItemContainer>
      <Link to={`/video/${id}`}>
        <img src={thumbnail} height="360" width="480" alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </VideoItemContainer>
  );
};

export default VideoItem;
