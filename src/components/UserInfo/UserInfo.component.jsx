import React, { useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../../state/UserContext';

// Default user
const guestUser = {
  name: 'Guest',
  avatarUrl: `${process.env.PUBLIC_URL}/images/user-icon.png`,
};

// Styles
const UserInfoContainer = styled.div`
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;

  h3 {
    margin: 0 0 0 1rem;
  }
`;
const UserInfoAvatar = styled.img`
  display: block;
  width: 5rem;
  border-radius: 10rem;
  overflow: hidden;
  background: white;
  padding: 3px;
`;

const UserInfo = () => {
  const { user } = useContext(UserContext);
  const displayUser = user ?? guestUser;
  return (
    <UserInfoContainer>
      <UserInfoAvatar src={displayUser.avatarUrl} alt="user avatar" />
      <h3>Welcome {displayUser.name}!</h3>
    </UserInfoContainer>
  );
};

export default UserInfo;
