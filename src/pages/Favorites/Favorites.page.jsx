import React, { useContext } from 'react';
import UserContext from '../../state/UserContext';
import VideoGrid from '../../components/VideoGrid';

const FavoritesPage = () => {
  const { user } = useContext(UserContext);
  const favs = user.favorites ?? [];

  // Render
  return (
    <>
      <h1>Favorites</h1>
      {favs.length === 0 ? <p>No favorite videos yet</p> : <VideoGrid videos={favs} />}
    </>
  );
};

export default FavoritesPage;
