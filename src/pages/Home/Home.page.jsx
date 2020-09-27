import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSearchResults } from '../../services/YouTubeAPI';
import VideoItem from '../../components/VideoItem';

function HomePage() {
  // Get list of videos
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getSearchResults('wizeline').then(setVideos).catch(console.log);
  }, []);

  return (
    <section>
      {videos.map((video) => {
        return <VideoItem key={video.id} {...video} />;
      })}
    </section>
  );
}

export default HomePage;
