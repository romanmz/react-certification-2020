import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Video';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/video/:id" component={VideoPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
