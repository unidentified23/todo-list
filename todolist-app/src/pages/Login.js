import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login(props) {
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");
  const [logindetails, setLogindetails] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const saveUserNameChanges = (e) => {
    const value = e.target.value;
    setUserName(value);
  };

  const savePasswordChanges = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const loginAuthentication = (e) => {
    e.preventDefault();
    const user = {
      username: userName,
      password: passWord,
    };

      setLogindetails([...logindetails, user]);
      setUserName("");
      setPassword("");
      setLoggedIn(true)
      navigate('/Home');
      // return(
      //   <div>

      //     loggedIn ? userName!=='' || passWord !=='' 

      //   </div>
      

  };

  return (
    <div className='App'>
      <header className='App-header'>
      <h1>Login</h1>

      <form onSubmit={loginAuthentication}>
        <input
          value={userName}
          type="text"
          name="username"
          onChange={saveUserNameChanges}
          placeholder="Enter Username"
        />
        <input
          value={passWord}
          type="password" 
          name="password"
          onChange={savePasswordChanges}
          placeholder="Enter Password"
        />
      
        <button type="submit">Login</button>
       
      </form>

      <p>
        Don't have an account? Click Here to <Link to="/Registration">sign up</Link>
      </p>
      </header>
    </div>
  );
}
