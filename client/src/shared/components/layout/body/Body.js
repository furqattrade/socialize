import React, {Component} from "react";
import './body.scss'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Player, LoadingSpinner, ControlBar , BigPlayButton} from 'video-react';
import video from '../../../images/Kadebostany - Save Me (Ash Remix).mp4'
import Scrolling from "./Scrolling";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons/faCheckCircle";


class Body extends Component{




    render() {

        const responsive = {
            superLargeDesktop: {
                breakpoint: { max: 4000, min: 3000 },
                items: 6
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 5
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 4,
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1
            }
        };

        return(
            <React.Fragment>
                <div className="body-wrapper">
                    <div className="popular-services">
                        <p></p>
                        <Carousel   swipeable={true} draggable={true}  keyBoardControl={true}  infinite={true} autoPlay={true} arrows={false} responsive={responsive}>
                            <div className="containers">
                                <img
                                    src="https://images.unsplash.com/photo-1488628075628-e876f502d67a?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg="
                                    alt=""/>
                                <p className="title">card title</p>
                                <div className="overlays"></div>
                                <div className="button"><a href="#"> More </a></div>
                            </div>
                            <div className="containers">
                                <img
                                    src="https://images.unsplash.com/photo-1488628075628-e876f502d67a?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg="
                                    alt=""/>
                                <p className="title">card title</p>
                                <div className="overlays"></div>
                                <div className="button"><a href="#"> More </a></div>
                            </div>
                            <div className="containers">
                                <img
                                    src="https://images.unsplash.com/photo-1488628075628-e876f502d67a?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg="
                                    alt=""/>
                                <p className="title">card title</p>
                                <div className="overlays"></div>
                                <div className="button"><a href="#"> More </a></div>
                            </div>
                            <div className="containers">
                                <img
                                    src="https://images.unsplash.com/photo-1488628075628-e876f502d67a?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg="
                                    alt=""/>
                                <p className="title">card title</p>
                                <div className="overlays"></div>
                                <div className="button"><a href="#"> More </a></div>
                            </div>
                            <div className="containers">
                                <img
                                    src="https://images.unsplash.com/photo-1488628075628-e876f502d67a?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg="
                                    alt=""/>
                                <p className="title">card title</p>
                                <div className="overlays"></div>
                                <div className="button"><a href="#"> More </a></div>
                            </div>
                        </Carousel>
                    </div>
                    <div className="row">
                        <div className="col-md-6 user-protection">
                            <p className="text ">Get work done faster, with confidence</p>
                            <div className="childContents">
                                <div className="row  inner-text">
                                    <i> <FontAwesomeIcon className="icons" icon={faCheckCircle}/></i><p> Payment protection, guaranteed</p> <p>Payment is released to the freelancer once you’re pleased and approve the work you get.</p>
                                </div>
                                <div className="row  inner-text">
                                    <i> <FontAwesomeIcon className="icons" icon={faCheckCircle}/></i><p> Payment protection, guaranteed</p> <p>Payment is released to the freelancer once you’re pleased and approve the work you get.</p>
                                </div>
                                <div className="row  inner-text">
                                    <i> <FontAwesomeIcon className="icons" icon={faCheckCircle}/></i><p> Payment protection, guaranteed</p> <p>Payment is released to the freelancer once you’re pleased and approve the work you get.</p>
                                </div>
                            </div>

                        </div>


                        <div className="col-md-6  video-holder">

                            <Player
                                poster="/assets/poster.png"
                                src={video}
                            >
                                <BigPlayButton position="center" />
                                <ControlBar autoHide={true} className="my-class" />
                                <LoadingSpinner />
                            </Player>
                        </div>
                    </div>
                </div>
                    <Scrolling/>
            </React.Fragment>


        )
    }
}
export default Body