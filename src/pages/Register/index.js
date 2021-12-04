import {useState} from 'react';
import axios from 'axios';
import Card from "../../components/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = async (e) => {
        e.preventDefault();

        const registerForm = {
            username,
            email,
            password
        }

        console.log(registerForm);
        const response = await axios.post('http://localhost:1337/auth/local/register', registerForm)

        console.log(response.data)
    }

    return (
        <div>
            <h1>Register Page</h1>

            <Card>
                <h2>Register Form</h2>

                <form onSubmit={register}>
                    <Input
                        label='Username'
                        id='username'
                        name='username'
                        placeholder='Enter your username...'
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        block />

                    <Input
                        label='Email'
                        id='email'
                        name='email'
                        type='email'
                        placeholder='Enter your email...'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        block />

                    <Input
                        label='Password'
                        id='password'
                        name='password'
                        type='password'
                        placeholder='Enter your password...'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        block />

                    <Button type='submit'>Register</Button>
                </form>
            </Card>
        </div>
    )
}

export default Register;
