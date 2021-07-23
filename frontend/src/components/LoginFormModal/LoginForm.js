import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./LoginForm.css";

function LoginForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const login = () => {
    dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
    history.push('/')
  }

  const demoLogIn = () => {
    setCredential('demo@user.io');
    setPassword('password');
    setErrors([]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    login();
  };

  return (
    <div className='form-container song-form-container'>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>
          Username or Email
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <div className='form-button-container'>
          <button type="submit">Log In</button>
        </div>
      </form>
      <div className='form-button-container'>
        <button type="submit" onClick={() => demoLogIn()}>Use Demo User</button>
      </div>
    </div>
  );
}

export default LoginForm;