import React, { useState } from 'react'

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginMessage, setLoginMessage] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      setLoginMessage('Login successful');
    } else {
      setLoginMessage('Login failed');
    }
  };

  const handlecancel =()=>{
    setPassword('')
    setUsername('')
  }

  const isLoginDisabled = !(username && password);

  return (
    <div >
     <h2>Login Page</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin} disabled={isLoginDisabled}>
        Login
      </button>
      <button style={{marginLeft:"5px"}} onClick={handlecancel} disabled={isLoginDisabled}>
        Cancel
      </button>
      <br />
      <p>{loginMessage}</p> 
    </div>
  );
}

export default App;
