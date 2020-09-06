import React, {useEffect} from 'react';
import './half-page.scss'
import {Controller, Scene} from "react-scrollmagic";
import TimeLine from "./TimeLine";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {TextPlugin} from "gsap/TextPlugin";
import {gsap} from "gsap";
import ComputerSvg from "./svg/ComputerSvg";
import SvgHacker from "./svg/Hacker";
import {InlineButton} from "./Buttons";




if (typeof window !== `undefined`) {
    gsap.registerPlugin(TextPlugin)
    gsap.core.globals("TextPlugin", TextPlugin)
    gsap.registerPlugin(ScrollTrigger)
    gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

function HalfPage (){
    useEffect(()=>{
        gsap.timeline({
            scrollTrigger:{
                trigger:".scrolling-part",
                start:"start center",
                end:"bottom bottom",
                scrub:3,
                snap:5


            }

        })  .from(".text1", {x:600,scale: 0.3,  rotation:45, autoAlpha: 0})
            .from(".text2", {x:-600, scale: 0.3, rotation:45, autoAlpha: 0})
            .from(".text3", {x:600, scale: 0.3 ,rotation:45, autoAlpha: 0})
            .from(".text4", {x:-600, scale: 0.3, rotation:45, autoAlpha: 0})
            .from(".text5", {x:600, scale: 0.3, rotation:45, autoAlpha: 0})
            .from(".text6", {x:-600, scale: 0.3, rotation:45, autoAlpha: 0})
            .from(".concept-of-seo-ranking-2040894_svg__svgShape",{z:600,scale: 0.3, rotation:45, autoAlpha: 0})

            gsap.timeline({
                scrollTrigger:{
                    trigger:".part2",
                    start:"-50% start",
                    end:"7%  bottom",
                    scrub:0,
                    markers:true,
                }
            }).from(".part2-title",{z:-1000,scale: 0.3, autoAlpha: 0})
                .from("#cd-timeline",{z:-1000,scale: 0.3, autoAlpha: 0})
                .from(".cd-timeline-block",{z:-1000,scale: 0.5, autoAlpha: 0})

        gsap.timeline({
            scrollTrigger:{
                trigger:".hacker",
                start:"-100px center",
                end:"bottom bottom",
                scrub:3,
                snap:0
            }
        }).from("#middle-men",{y:400,scale:0.3, autoAlpha: 0})
            .from("#right-men",{x:300,scale:0.3, autoAlpha: 0})
            .from("#left-men",{x:-300,scale:0.3, autoAlpha: 0})
            .from("#circle",{z:0,opacity:0, autoAlpha: 0})
            .to("#circle",{z:0,opacity:1, autoAlpha: 0})
            .from("#men",{z:-100,scale: 0.3, autoAlpha: 0})



    },[])
        return (
            <div className="full-page">
                <Controller>
                    <Scene duration={1520} pin=".title-part" triggerElement=".title-part"  triggerHook={0 }>
                        <div className="title-part">
                            <div className="money">
                                <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                            </div>
                            <p className="developer-part-main-title">Be The Best IT Developer With Us And Earn Your First Millions</p>
                        </div>
                    </Scene>
                </Controller>
                     <div className="scrolling-parts">
                         <div className="scrolling-part part1">
                           <p className="text1">If you have burning desire to create new things</p>
                           <p className="text2">If you want to work when you want</p>
                           <p className="text3">If you want to do what you want</p>
                           <p className="text4">it means your future job is programmer</p>
                           <p className="text5">Be programmer with us TODAY and WORK in our team</p>
                           <p className="text6">We are waiting for you</p>
                             <ComputerSvg/>
                         </div>
                         <div className="scrolling-part part2">
                             <p className=" part2-title mb-5">Action road</p>
                             <TimeLine/>
                         </div>
                         <div className="scrolling-part part3">
                         <div className="hacker">
                             <SvgHacker/>
                             <div className=" contact-text ml-5 ">
                                 <p>Where are you. We ale looking for you</p>
                                 <p>If you are here click button and change your life</p>
                                 <InlineButton extraClass={"registration-btn"} text={"registration"}/>
                             </div>
                         </div>
                         </div>
                     </div>

            </div>

        );

}

export default HalfPage;