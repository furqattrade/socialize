     import React from 'react'
     import './main-navbar.scss'
     class  MainNavbar extends React.Component{


    render() {

        const toggleBar =(e)=>{
            e.target.classList.toggle("open");
            document.querySelector(".overlay").classList.toggle("open");
            document.querySelector("header").classList.toggle("open");


        };
        return (
            <header>
            <div onClick={toggleBar} className="menu">
                <div className="bar"></div>
            </div>
                <div className="overlay"></div>
                <nav>
                    <a href="#" className="brand">BRAND</a>
                    <ul>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Home</a>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }


     }

     export default MainNavbar