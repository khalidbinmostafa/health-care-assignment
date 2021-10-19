import React from 'react';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle } = useAuth();

    const handleLogin = (e) => {
        console.log('vai acho');
        e.preventDefault();
    }
    return (
        <div className="container">
            <form onSubmit={handleLogin}>
                <h2>Please Login</h2>
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" /><br />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" /><br />
                <input type="submit" value="Login" />
            </form>
            <br /><br /><br />
            <div>--------or--------</div>
            <button onClick={signInUsingGoogle} className="btn btn-warning">Google sign in</button>
        </div>
    );
};

export default Login;