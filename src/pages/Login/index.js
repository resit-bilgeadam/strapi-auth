import { useState } from 'react';
import axios from 'axios';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Card from '../../components/Card';
import styles from './Login.module.scss';

function Login() {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');

    const login = async (e) => {
        e.preventDefault();

        const loginForm = {
            identifier,
            password
        }

        console.log(loginForm);
        const response = await axios.post('http://localhost:1337/auth/local', loginForm);
        console.log(response.data);
    }

    return (
        <div>
            <h1>Login Page</h1>

            <Card>
                <h2>Login Form</h2>

                <form onSubmit={login}>
                    <Input
                        label='Username or Email'
                        type='text'
                        name='identifier'
                        id='identifier'
                        placeholder='Enter your username or email address...'
                        block
                        value={identifier}
                        onChange={e => setIdentifier(e.target.value)} />

                    <Input
                        label='Password'
                        type='password'
                        name='password'
                        placeholder='Enter your password...'
                        block
                        value={password}
                        onChange={e => setPassword(e.target.value)} />

                    <Button type='submit'>Login</Button>
                </form>
            </Card>
        </div>
    )
}

export default Login;
