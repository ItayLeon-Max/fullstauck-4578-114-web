import { useForm } from 'react-hook-form';
import './Login.css';
import LoginModel from '../../../models/user/Login';
import auth from '../../../services/auth';
import { useContext } from 'react';
import { AuthContext } from '../auth/Auth';
export default function Login() {

    const {register, handleSubmit} = useForm<LoginModel>();

    const { setJwt } = useContext(AuthContext)!;

    async function submit(login: LoginModel){
        const Jwt = await auth.login(login);
        setJwt(Jwt);
    }

    return (
        <div className='Login'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(submit)}>
                <label htmlFor='username'>Username</label>
                <input id='username' {...register('username')} type='text' />
                <label htmlFor='password'>Password</label>
                <input id='password' type='password' {...register('password')} />
                <button type='submit'>Login</button>
                <button type='button'>Register</button>
                <button type='button'>Forgot Password</button>
            </form>
        </div>
    )
}