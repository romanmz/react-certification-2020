import React, { useContext } from 'react';
import UserContext from '../../state/UserContext';

const guestUser = {
  name: 'Guest',
  avatarUrl: `${process.env.PUBLIC_URL}/images/user-icon.png`,
};

const UserInfo = () => {
  const { user } = useContext(UserContext);
  const displayUser = user ?? guestUser;
  return (
    <>
      <h3>Welcome {displayUser.name}!</h3>
      <img src={displayUser.avatarUrl} alt="user avatar" />
    </>
  );
};

export default UserInfo;
