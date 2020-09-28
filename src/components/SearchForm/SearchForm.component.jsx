import React, { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import SearchContext from '../../state/SearchContext';

const SearchFormContainer = styled.form`
  display: flex;
  margin: 1rem;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.75);
  overflow: hidden;

  label {
    flex: 1;
    align-items: stretch;
    height: 4rem;
  }
  input {
    display: block;
    width: 100%;
    height: 100%;
    padding: 1rem;
    color: white;
    background: rgba(255, 255, 255, 0.25);
    border: none;
  }
  button {
    display: block;
    flex: 0 0 12rem;
    cursor: pointer;
    border: none;
    color: #f0575d;
    background: rgba(255, 255, 255, 0.75);
    transition: all 0.5s;
  }
  button:hover,
  button:focus {
    background: white;
  }
`;

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
    <SearchFormContainer onSubmit={onFormSubmit}>
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
    </SearchFormContainer>
  );
};

export default SearchForm;
