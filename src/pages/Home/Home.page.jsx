import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getSearchResults } from '../../services/YouTubeAPI';
import VideoGrid from '../../components/VideoGrid';
import SearchContext from '../../state/SearchContext';

function HomePage() {
  // Get params
  const params = useParams();
  const { keyword, setKeyword } = useContext(SearchContext);

  // Update keyword based on URL
  useEffect(() => {
    const newKeyword = params.keyword ?? 'wizeline';
    if (newKeyword !== keyword) {
      setKeyword(newKeyword);
    }
  }, [params.keyword, keyword, setKeyword]);

  // Get list of videos
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getSearchResults(keyword).then(setVideos).catch(console.log);
  }, [keyword]);

  // Render
  return (
    <section>
      <VideoGrid videos={videos} />
    </section>
  );
}

export default HomePage;
