import React, { useState, useEffect } from 'react';
import { getSearchResults } from '../../services/YouTubeAPI';
import VideoItem from '../../components/VideoItem';

function HomePage() {
  // Get list of videos
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getSearchResults('wizeline').then(setVideos).catch(console.log);
  }, []);

  // Render
  return (
    <section>
      {videos.map((video) => {
        return <VideoItem key={video.id} {...video} />;
      })}
    </section>
  );
}

export default HomePage;
