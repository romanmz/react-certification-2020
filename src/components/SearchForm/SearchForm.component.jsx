import React, { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import SearchContext from '../../state/SearchContext';

const SearchForm = () => {
  const searchInput = useRef();
  const { keyword } = useContext(SearchContext);
  const history = useHistory();

  // On submit
  const onFormSubmit = (e) => {
    e.preventDefault();
    const searchTerm = searchInput.current.value;
    history.push(searchTerm ? `/search/${searchTerm}` : '/');
  };

  // Render
  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="keyword">
        <input
          type="search"
          id="keyword"
          placeholder="Search keyword…"
          defaultValue={keyword}
          ref={searchInput}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
