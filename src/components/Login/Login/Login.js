import React from 'react';
import { Form, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle, createUser, handleName, handleEmail, handlePassword } = useAuth();


    const handleLogin = (e) => {

        e.preventDefault();
    }
    return (
        <>

            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                    </Form.Group>

                    <Button onClick={createUser} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <button onClick={signInUsingGoogle} className="btn btn-warning">Google sign in</button>
            </div>
        </>
    );
};

export default Login;