import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


//Will have the pages of about, portfolio, contact, and resume  --  we will begin with the about page
function App(){

    const [page, setPage] = useState("about");

    const currentPage = () => {
        switch(page){
            case "portfolio":
                return <PortfolioPage />
            case "contact":
                return <ContactPage />
            case "resume":
                return <ResumePage />
            case "about":
                return <AboutPage />
            default:
                return <AboutPage />
        }

    }

    return (
        <div className="App">

            <header className="App-header">

            <img src={logo} className="App-logo" alt="logo" />

            <p> Not Sure What We Need To Put Here - p and img can possibly be deleted</p>

            <nav page={page} setPage={setPage} />

            </header>

            <main>
                {currentPage()}
            </main>

            <footer>

            </footer>
            
        </div>

    )
}

export default App;