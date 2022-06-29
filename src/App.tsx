import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useAuth0} from "@auth0/auth0-react";

function App() {
  const {logout, loginWithRedirect} = useAuth0()
  return (
    <div className="App">
      <button
      onClick={() => loginWithRedirect()}
      >
        Login
      </button>
        <button
        onClick={() => logout()}
        >
            Logout
        </button>
    </div>
  );
}

export default App;
