import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../../state/UserContext';

const PrivateRoute = (props) => {
  const { user } = useContext(UserContext);
  const isLoggedIn = user !== null;
  return isLoggedIn ? <Route {...props} /> : <Redirect to="/login" />;
};

export default PrivateRoute;
