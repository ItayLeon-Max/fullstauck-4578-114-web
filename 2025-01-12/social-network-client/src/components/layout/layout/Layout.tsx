import Login from '../../auth/Login/Login'
import Followers from '../../follows/followers/Followers'
import Following from '../../follows/following/Following'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Routing from '../routing/Routing'
import './Layout.css'

export default function Layout() {

    const isLoggedIn: boolean = false;

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