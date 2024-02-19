import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest, loginSuccess, loginFailure, selectError, selectIsLoading, selectIsLoggedIn } from './loginSlice';
import {fakeLoginAPI} from './fakeAPI';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginRequest());
    fakeLoginAPI(username, password)
      .then(() => {
        dispatch(loginSuccess());
      })
      .catch((error) => {
        dispatch(loginFailure(error.message));
      });
  };

  return (
    <div>
      <h1>Fake Login</h1>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin} disabled={isLoading}>{isLoading ? 'Logging in...' : 'Login'}</button><br/><br/>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {isLoggedIn && <p style={{ color: 'green' }}>Login successful!</p>}
    </div>
  );
};

export default Login;
