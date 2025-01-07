import './App.css';
import Details from "./components/Details/Details";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";

export default function App() {
    return (
        <>
        <Header />
            <div className="mainContainer">
              <Details />
              <Skills />
        </div>
        </>
    )
}