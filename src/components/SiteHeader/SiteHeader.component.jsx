import React from 'react';
import styled from 'styled-components';

// Components
import UserInfo from '../UserInfo';
import SiteNav from '../SiteNav';
import SearchForm from '../SearchForm';

// Styles
const SiteHeaderContainer = styled.header`
  margin: 0 0 4rem;
  background: #f0575d;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const SiteHeader = () => {
  return (
    <SiteHeaderContainer>
      <UserInfo />
      <SiteNav />
      <SearchForm />
    </SiteHeaderContainer>
  );
};

export default SiteHeader;
