import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import loginApi from '../../services/MockLogin';
import UserContext from '../../state/UserContext';

const LoginPage = () => {
  // Form state
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const history = useHistory();

  // Login
  const attemptLogin = (e) => {
    setLoginError(null);
    setIsLoading(true);
    loginApi(username, password)
      .then((loggedInUser) => {
        setUser(loggedInUser);
        history.push('/');
      })
      .catch((error) => {
        setLoginError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    e.preventDefault();
  };

  return (
    <form onSubmit={attemptLogin} className={isLoading ? 'is-loading' : ''}>
      {loginError && <p className="error-message">{loginError.message}</p>}
      <p>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            id="username"
            value={username}
            data-testid="username-field"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            value={password}
            data-testid="password-field"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </p>
      <p>
        <button type="submit">Login</button>
      </p>
    </form>
  );
};

export default LoginPage;
