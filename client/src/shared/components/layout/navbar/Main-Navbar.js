     import React from 'react'
     import './main-navbar.scss'
     import $ from 'jquery'
     import {  Tween, SplitWords } from 'react-gsap';
     import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
     import {faGlobe} from "@fortawesome/free-solid-svg-icons";

     class  MainNavbar extends React.Component{

    render() {
        const toggleBar =(e)=>{
            e.target.classList.toggle("open");
            document.querySelector(".overlay").classList.toggle("open");
            document.querySelector("header").classList.toggle("open");
        };

        $(document).ready(function(){
            $(window).scroll(function() {
                if ($(document).scrollTop() > 100) {
                    $("nav").css("background-color", "white");
                    $("nav").css("transition"," background-color 1.3s ease 0s");
                    $(".main-nav-link").css("color", "black");
                    $(".brand").css("color", "black");

                } else {
                    $("nav").css("background-color", "transparent"); // if not, change it back to transparent
                    $(".main-nav-link").css("color", "#eceaea");
                    $(".brand").css("color", "#eceaea");
                }
            });
        });
        return (
            <div>
                <div onClick={toggleBar} className="menu">
                    <div className="bar"></div>
                </div>
                <div className="overlay"></div>
                <header>
                    <nav>
                        <a href="#" className="brand">BRAND</a>
                        <ul>
                            <li className="main-nav-item">
                                <a href="#" className="main-nav-link">Services</a>
                            </li>
                            <li className="main-nav-item">
                                <a href="#" className="main-nav-link">For Bloggers</a>
                            </li>
                            <li className="main-nav-item">
                                <a href="#" className="main-nav-link">For Developers</a>
                            </li>
                            <li className="main-nav-item">
                                <a href="#" className="main-nav-link">For Designers</a>
                            </li>
                            <li className="main-nav-item">
                                <a href="#" className="main-nav-link"><span><FontAwesomeIcon icon={faGlobe}/>      ENG</span></a>
                            </li>
                            <li className="main-nav-item">
                                <a href="#" className="main-nav-link">Sign in </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="bg-video-wrapper">
                        <video src="https://designsupply-web.com/samplecontent/vender/codepen/20181014.mp4" loop muted
                               autoPlay>
                        </video>
                        <div className="body-overlay">
                        </div>
                    </div>
                </header>
            </div>


        )
    }


     }

     export default MainNavbar