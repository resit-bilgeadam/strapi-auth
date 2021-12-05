import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Card from '../../components/Card';
import {loginAction} from '../../store/actionCreators';
import styles from './Login.module.scss';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');

    const login = async (e) => {
        e.preventDefault();

        const loginForm = {
            identifier,
            password
        }

        dispatch(loginAction(loginForm))
        navigate('/');
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
