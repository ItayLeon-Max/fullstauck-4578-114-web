import {  NavLink } from 'react-router-dom';
import './Header.css';

export default function Header(): JSX.Element {
    return (
        <header className='Header'>
            <div>Logo</div>
            <div>
                <nav>
                    {/* <a href='/profile'>Profile</a>
                    <a href='/feed'>Feed</a> */}
                    {/* <Link to='/profile'>Profile</Link>
                    <Link to='/feed'>Feed</Link> */}
                    <NavLink to='/profile'>Profile</NavLink>
                    <NavLink to='/feed'>Feed</NavLink>
                    <NavLink to='/search'>Search</NavLink>
                </nav>
            </div>
        </header>
    );
}