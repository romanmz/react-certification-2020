import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../../state/UserContext';

const SiteNav = () => {
  const { user } = useContext(UserContext);
  return (
    <nav>
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
    </nav>
  );
};

export default SiteNav;
