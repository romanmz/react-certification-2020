import React, { useState } from 'react';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';

// Contexts
import UserContext from '../../state/UserContext';

// Pages
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Video';
import LoginPage from '../../pages/Login';
import FavoritesPage from '../../pages/Favorites';

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <header>
          {user ? (
            <>
              <h3>Welcome {user.name}</h3>
              <img src={user.avatarUrl} alt="user avatar" />
            </>
          ) : (
            ''
          )}
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
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/video/:id" component={VideoPage} />
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/favorites" component={FavoritesPage} />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
