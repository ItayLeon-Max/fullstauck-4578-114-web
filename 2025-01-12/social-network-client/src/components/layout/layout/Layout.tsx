import { useContext } from 'react'
import Login from '../../auth/Login/Login'
import Followers from '../../follows/followers/Followers'
import Following from '../../follows/following/Following'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Routing from '../routing/Routing'
import './Layout.css'
import { AuthContext } from '../../auth/auth/Auth'

export default function Layout() {

    const { jwt } = useContext(AuthContext)!;
    const isLoggedIn: boolean = !!jwt;

    return (
        <div>
        {isLoggedIn && <>
            <div className='Layout'>

            <header>
                <Header />                
            </header>                
            <aside>
                <Following />
            </aside>
            <aside>
                <Followers />
            </aside>
            <main>
                <Routing />
            </main>
            <footer>
                <Footer />
            </footer>
            </div>
        </>}


        {!isLoggedIn && <>
            <Login />
        </>}
        </div>
    )
}