import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            username,
            password
        };

        try {
            const response = await axios.post('/api/account/login', user);
            const token = response.data.token;
            // Store the token (e.g., in local storage) for subsequent requests or to maintain user session
        } catch (error) {
            console.error(error);
            // Handle login errors
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    );
};

const App = () => {
    return (
      <Router>
        <div>
          {/* Your other components and elements */}
        </div>
      </Router>
    );
  };
  

export default LoginForm;
