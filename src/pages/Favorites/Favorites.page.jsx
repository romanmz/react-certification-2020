import React, { useContext } from 'react';
import UserContext from '../../state/UserContext';
import VideoItem from '../../components/VideoItem';

const FavoritesPage = () => {
  const { user } = useContext(UserContext);
  const favs = user.favorites ?? [];

  // Render
  return (
    <>
      <h1>Favorites</h1>
      {favs.length === 0 ? (
        <p>No favorite videos yet</p>
      ) : (
        favs.map((video) => <VideoItem key={video.id} {...video} />)
      )}
    </>
  );
};

export default FavoritesPage;
