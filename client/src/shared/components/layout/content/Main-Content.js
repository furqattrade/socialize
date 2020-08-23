import React from 'react'
import './main-content.scss'
import MainNavbar from "../navbar/Main-Navbar";
import Footer from "../footer/Footer";
import Body from "../body/Body";

class  MainContent extends React.Component{

    render() {

        return (
            <div className="wrapper">
         <div className="main">
            <MainNavbar/>
            <Body/>
            </div>
            <Footer/>
            </div>
        )
    }


}

export default MainContent