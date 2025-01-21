import { useForm } from 'react-hook-form';
import './Login.css';
import LoginModel from '../../../models/user/Login';
import auth from '../../../services/auth';
export default function Login() {

    const {register, handleSubmit} = useForm<LoginModel>();

    async function submit(login: LoginModel){
        const jwt = await auth.login(login);
        console.log(jwt)
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
            </form>
        </div>
    )
}