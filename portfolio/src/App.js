import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';


//Will have the pages of about, portfolio, contact, and resume  --  we will begin with the about page
function App(){

    const [page, setPage] = useState("about");

    const currentPage = () => {
        // switch(page){
        //     case "portfolio":
        //         return <PortfolioPage />
        //     case "contact":
        //         return <ContactPage />
        //     case "resume":
        //         return <ResumePage />
        //     case "about":
        //         return <AboutPage />
        //     default:
        //         return <AboutPage />
        // }

    }

    //Header, Nav, and Footer caps because they are brought in
    return (
        <div className="App">

            <Header className="App-header">

            <img src={logo} className="App-logo" alt="logo" />

            <p> Not Sure What We Need To Put Here - p and img can possibly be deleted</p>

            <Nav page={page} setPage={setPage} />

            </Header>

            <main>
                {currentPage()}
            </main>

            <Footer>

            </Footer>
            
        </div>

    )
}

export default App;