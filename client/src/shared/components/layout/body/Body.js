import React, {Component} from "react";
import './body.scss'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Player, LoadingSpinner, ControlBar , BigPlayButton} from 'video-react';
import video from '../../../images/Kadebostany - Save Me (Ash Remix).mp4'
import webVideo from '../../../images/webSiteCreating.m4v'
import seoVideo from '../../../images/seoVideo.m4v'
import SMMVideo from '../../../images/SMMVideo.m4v'
import targetingVideo from '../../../images/targetingVideo.m4v'
import logoDesignVideo from '../../../images/logoDesignVideo.m4v'
import ITTeachingVideo from '../../../images/ITTeachingVideo.m4v'
import InstaVideo from '../../../images/InstaVideo.m4v'
import Scrolling from "./Scrolling";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons/faCheckCircle";
import HalfPage from "./elements/HalfPage";
import {InlineButton} from "./elements/Buttons";
import LoginPage from "../../login/loginPage";
import Card3D from "./elements/Card3D";


class Body extends Component{




    render() {

        const responsive = {
            superLargeDesktop: {
                breakpoint: { max: 4000, min: 3000 },
                items: 4
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 4
            },
            tablet: {
                breakpoint: { max: 1024, min: 800 },
                items: 4,
            },
            mobile: {
                breakpoint: { max: 800, min: 300 },
                items: 3
            },
            supperSmall: {
                breakpoint: { max: 300, min: 0 },
                items: 1
            }
        };

        return(
            <React.Fragment>
                <div className="body-wrapper">
                    <div className="popular-services">
                        <p className="sections-main-title" >Popular services</p>
                        <Carousel autoPlaySpeed={5000}   swipeable={true} draggable={true}  keyBoardControl={true}  infinite={true} autoPlay={true} arrows={false} responsive={responsive}>
                            <div className="card__item">
                                <div className="card">
                                    <div className="card__front">
                                        <div className="title">Creating Web Sites</div>
                                        <div className="overlays"></div>
                                        <video loop={true} autoPlay={true} src={webVideo}></video>
                                    </div>
                                    <div className="card__back">
                                        <div className="title">Creating Web Sites</div>
                                        <InlineButton  text="MORE" extraClass="buttonStyle" />
                                    </div>
                                </div>
                            </div>
                            <div className="card__item">
                                <div className="card">
                                    <div className="card__front">
                                        <div className="title">Making Instagram Stories</div>
                                        <div className="overlays"></div>
                                        <video loop={true} autoPlay={true} src={InstaVideo}></video>
                                    </div>
                                    <div className="card__back">
                                        <div className="title">Making Instagram Stories</div>
                                        <InlineButton  text="MORE" extraClass="buttonStyle" />
                                    </div>
                                </div>
                            </div>
                            <div className="card__item">
                                <div className="card">
                                    <div className="card__front">
                                        <div className="title">IT Courses</div>
                                        <div className="overlays"></div>
                                        <video loop={true} autoPlay={true} src={ITTeachingVideo}></video>
                                    </div>
                                    <div className="card__back">
                                        <div className="title ">IT Courses</div>
                                        <InlineButton   text="MORE" extraClass="buttonStyle" />
                                    </div>
                                </div>
                            </div>
                            <div className="card__item">
                                <div className="card">
                                    <div className="card__front">
                                        <div className="title">Logo Design</div>
                                        <div className="overlays"></div>
                                        <video loop={true} autoPlay={true} src={logoDesignVideo}></video>
                                    </div>
                                    <div className="card__back">
                                        <div className="title">Logo Design </div>
                                        <InlineButton   text="MORE" extraClass="buttonStyle" />
                                    </div>
                                </div>
                            </div>
                            <div className="card__item">
                                <div className="card">
                                    <div className="card__front">
                                        <div className="title">SMM</div>
                                        <div className="overlays"></div>
                                        <video loop={true} autoPlay={true} src={SMMVideo}></video>
                                    </div>
                                    <div className="card__back">
                                        <div className="title">SMM </div>
                                        <InlineButton  text="MORE" extraClass="buttonStyle" />
                                    </div>
                                </div>
                            </div>
                            <div className="card__item">
                                <div className="card">
                                    <div className="card__front">
                                        <div className="title">SEO</div>
                                        <div className="overlays"></div>
                                        <video loop={true} autoPlay={true} src={seoVideo}></video>
                                    </div>
                                    <div className="card__back">
                                        <div className="title">SEO </div>
                                        <InlineButton  text="MORE" extraClass="buttonStyle" />
                                    </div>
                                </div>
                            </div>
                            <div className="card__item">
                                <div className="card">
                                    <div className="card__front">
                                        <div className="title">Targeting</div>
                                        <div className="overlays"></div>
                                        <video loop={true} autoPlay={true} src={targetingVideo}></video>
                                    </div>
                                    <div className="card__back">
                                        <div className="title">Targeting </div>
                                        <InlineButton  text="MORE" extraClass="buttonStyle" />
                                    </div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                    <div className="row">
                        <div className="col-md-6 user-protection">
                            <p className="sections-main-title ">Get work done faster, with confidence</p>
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
                                src={video}>
                                <BigPlayButton position="center" />
                                <ControlBar autoHide={true} className="my-class" />
                                <LoadingSpinner />
                            </Player>
                        </div>
                    </div>
                </div>
                    <Scrolling/>
                    <HalfPage/>
            </React.Fragment>


        )
    }
}
export default Body