import React, {Component} from 'react';
import './logo-design-page.scss'
import Carousel from "react-multi-carousel";
import brachure from '../../../../images/brachure.png'
import brachures from '../../../../images/brachures.png'
import businessCard from '../../../../images/businessCard.png'
import graphicDesign from '../../../../images/graphicDesign.png'
import design from '../../../../images/design.png'
import Tilt from 'react-parallax-tilt';
import {InlineButton} from "./Buttons";


class LogoDesignPage extends Component {
    render() {
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
                breakpoint: { max: 1024, min: 464 },
                items: 1
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1
            }
        };

        return (
            <div className="logo-design-page">
                <div className="row logo-page-wrapper">
                    <div className="logo-title-wrapper">
                   <p className="logo-title">Logo Design</p>
                        <p className="logo-sub-title">Powerful LOGOS speaks directly to your market</p>
                    </div>
                        <div className="row logo-content ">
                            <div className="col-md-6 text-part">
                                <div className="row">
                                    <p>Kickstart Your Business</p>
                                    <p>Start With A Logo.</p>
                                </div>
                                <div className="info-button"><InlineButton text={"Order Now"} extraClass={"logo-page-button"}/></div>
                            </div>
                            <div className="col-md-6 carousel-part">
                                <Tilt>
                                <Carousel swipeable={false} draggable={false}  keyBoardControl={true}  infinite={true} autoPlay={true} arrows={false} responsive={responsive}>
                                    <div className="single-image"><img src={graphicDesign} alt=""/></div>
                                    <div className="single-image"><img src={businessCard} alt=""/></div>
                                    <div className="single-image"><img src={brachures} alt=""/></div>
                                    <div className="single-image"><img src={brachure} alt=""/></div>
                                    <div className="single-image"><img src={design} alt=""/></div>
                                </Carousel>
                                </Tilt>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default LogoDesignPage;