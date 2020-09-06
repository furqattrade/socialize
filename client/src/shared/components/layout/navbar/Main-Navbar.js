     import React, {useRef, useEffect} from 'react'
     import './main-navbar.scss'
     import $ from 'jquery'
     import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
     import {faGlobe} from "@fortawesome/free-solid-svg-icons";
     import {faFingerprint} from "@fortawesome/free-solid-svg-icons";
     import Carousel from "react-multi-carousel";
     import webProgramming from "../../../images/webProgramming.png";
     import targeting from "../../../images/targeting.png";
     import logoMaking from "../../../images/logoMaking.png";
     import smm from "../../../images/smm.png";
     import coding from "../../../images/coder.png";
     import seoManagement from "../../../images/seoManagement.png";
     import {InlineButton} from "../body/elements/Buttons";
     import Tilt from 'react-parallax-tilt';
     import {gsap} from "gsap";


     function  MainNavbar (){

         useEffect(()=>{
            gsap.from(".nav-text-1",{x:-600,ease: "sine.out",delay:1, scale: 0.3, rotation:45, autoAlpha: 0})
            gsap.from(".nav-text-2",{x:600, ease: "sine.out",delay:1, scale: 0.3, rotation:45, autoAlpha: 0})
            gsap.from(".photo-part",{z:600, ease: "sine.out",delay:1, scale: 0.3, rotation:45, autoAlpha: 0})
            gsap.to(".jumper-text",{x:-600, ease: "sine.out",delay:2, scale: 0.3, rotation:45, autoAlpha: 0}).repeat()
         },[])


        const toggleBar =(e)=>{
            e.target.classList.toggle("open");
            document.querySelector(".overlay").classList.toggle("open");
            document.querySelector("header").classList.toggle("open");
        };
        $(document).ready(function(){
            $(window).scroll(function() {
                if ($(document).scrollTop() > 100) {
                    $("nav").css("background-color",  "#353333");
                    $("nav").css("transition"," background-color 1.3s ease 0s");
                    $("nav").css("opacity","0.8");
                    $("nav").css("z-index","9999");
                    $(".main-nav-link").css("z-index", "9998");
                    $(".main-nav-link").css("color", "white");
                    $(".brand").css("color", "white");

                } else {
                    $("nav").css("z-index","9999");
                    $(".main-nav-link").css("z-index", "9998");
                    $("nav").css("background-color", "transparent");
                    $(".main-nav-link").css("color", "black");
                    $(".brand").css("color", "black");
                }
            });
        });
        const responsive = {
            superLargeDesktop: {
                breakpoint: { max: 4000, min: 3000 },
                items: 1
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 1
            },
            tablet: {
                breakpoint: { max: 1024, min: 800 },
                items: 1,
            },
            mobile: {
                breakpoint: { max: 800, min: 300 },
                items: 1
            },
            supperSmall: {
                breakpoint: { max: 300, min: 0 },
                items: 1
            }
        };
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
                                <a href="#" className="main-nav-link"><span><FontAwesomeIcon style={{color:"white"}} icon={faGlobe}/> ENG</span></a>
                            </li>
                            <li className="main-nav-item">
                                <a href="#" className="main-nav-link"><span><FontAwesomeIcon style={{color:"white"}} icon={faFingerprint}/> Sign in</span> </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="bg-wrapper">
                        <div className="text-part">
                            <Tilt>

                            <p  className="nav-text-1">People don't buy products, they buy solutions.</p>
                            <p  className="nav-text-2">All  solutions are here, just want it. </p>
                            </Tilt>
                            <Tilt>
                                <InlineButton text="Contact Us" extraClass="main-button" />
                            </Tilt>
                        </div>
                      <div  className="photo-part">
                          <Tilt>
                         <Carousel  autoPlaySpeed={4000} swipeable={true} draggable={false}  keyBoardControl={true}  infinite={true} autoPlay={true} arrows={false} responsive={responsive}>
                             <div className="main-photos" >
                                 <p>SMM</p>
                                 <img  src={smm} alt=""/>
                             </div>
                             <div className="main-photos" >
                                 <p>Making Web Sites</p>
                                 <img  src={webProgramming} alt=""/>
                             </div>
                             <div className="main-photos" >
                                 <p>Targeting</p>
                                 <img  src={targeting} alt=""/>
                             </div>
                             <div className="main-photos" >
                                 <p>SEO Management</p>
                                 <img  src={seoManagement} alt=""/>
                             </div>
                             <div className="main-photos" >
                                 <p>Logo Design</p>
                                 <img  src={logoMaking} alt=""/>
                             </div>
                             <div className="main-photos" >
                                 <p>Programming Courses</p>
                                 <img  src={coding} alt=""/>
                             </div>
                         </Carousel>
                          </Tilt>
                      </div>
                    </div>
                </header>
            </div>


        )
     }

     export default MainNavbar