import React from 'react';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Router, Route } from 'react-router-dom';

export default function renderWithRouter(
  ui,
  {
    path = '/',
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) {
  return render(
    <Router history={history}>
      <Route path={path} component={ui} />
    </Router>
  );
}
