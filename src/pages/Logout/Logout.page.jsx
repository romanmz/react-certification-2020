import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../state/UserContext';

const LogoutPage = () => {
  const { setUser } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    setUser(null);
    history.push('/');
  }, [setUser, history]);

  return <p>Logging out…</p>;
};

export default LogoutPage;
