import React from 'react'
import './main-content.scss'
import MainNavbar from "../navbar/Main-Navbar";
import Footer from "../footer/Footer";
class  MainContent extends React.Component{

    render() {

        return (
            <main>
            <MainNavbar/>
            <Footer/>
            </main>
        )
    }


}

export default MainContent