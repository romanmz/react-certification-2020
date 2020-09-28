import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import UserContext from '../../state/UserContext';

const SiteNavContainer = styled.nav`
  margin: 0 0 1rem;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
  }
  li {
  }
  a {
    display: block;
    padding: 0.5rem 1rem;
    color: white;
    transition: all 0.5s;
    text-decoration: none;
  }
  a:hover,
  a:focus {
    // color: #f0575d;
    background: rgba(255, 255, 255, 0.25);
  }
  a.active {
    color: #f0575d;
    background: white;
  }
`;

const SiteNav = () => {
  const { user } = useContext(UserContext);
  return (
    <SiteNavContainer>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        {user && (
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        )}
        <li>
          {user ? (
            <NavLink to="/logout">Logout</NavLink>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </li>
      </ul>
    </SiteNavContainer>
  );
};

export default SiteNav;
