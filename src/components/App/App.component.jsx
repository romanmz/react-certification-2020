import React, { useState } from 'react';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';

// Contexts
import UserContext from '../../state/UserContext';
import SearchContext from '../../state/SearchContext';

// Components
import SearchForm from '../SearchForm';

// Pages
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Video';
import LoginPage from '../../pages/Login';
import LogoutPage from '../../pages/Logout';
import FavoritesPage from '../../pages/Favorites';

function App() {
  const [user, setUser] = useState(null);
  const [keyword, setKeyword] = useState('wizeline');

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <SearchContext.Provider value={{ keyword, setKeyword }}>
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
                  {user ? (
                    <NavLink to="/logout">Logout</NavLink>
                  ) : (
                    <NavLink to="/login">Login</NavLink>
                  )}
                </li>
              </ul>
            </nav>
            <SearchForm />
          </header>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/search/:keyword" component={HomePage} />
            <Route path="/video/:id" component={VideoPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/logout" component={LogoutPage} />
            <PrivateRoute path="/favorites" component={FavoritesPage} />
          </Switch>
        </BrowserRouter>
      </SearchContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
