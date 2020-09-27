import React, { useState } from 'react';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';

// Contexts
import UserContext from '../../state/UserContext';

// Pages
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Video';

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
            </ul>
          </nav>
        </header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/video/:id" component={VideoPage} />
      </Switch>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
