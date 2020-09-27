import React from 'react';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';

// Pages
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Video';

function App() {
  return (
    <BrowserRouter>
        <header>
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
  );
}

export default App;
