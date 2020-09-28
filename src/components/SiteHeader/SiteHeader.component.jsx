import React from 'react';

// Components
import UserInfo from '../UserInfo';
import SiteNav from '../SiteNav';
import SearchForm from '../SearchForm';

const SiteHeader = () => {
  return (
    <header>
      <UserInfo />
      <SiteNav />
      <SearchForm />
    </header>
  );
};

export default SiteHeader;
