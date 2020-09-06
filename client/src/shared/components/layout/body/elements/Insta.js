import React, {useEffect} from 'react';
import './insta.scss'
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {TextPlugin} from "gsap/TextPlugin";
import {gsap} from "gsap";
if (typeof window !== `undefined`) {
    gsap.registerPlugin(TextPlugin)
    gsap.core.globals("TextPlugin", TextPlugin)
    gsap.registerPlugin(ScrollTrigger)
    gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

function Insta () {
useEffect(()=>{
    gsap.timeline({
        scrollTrigger:{
            trigger:".seo",
            start:"center center",
            end:"bottom bottom",
            pin:true,
            scrub:1,
            snap: {
                snapTo: "labels", // snap to the closest label in the timeline
                duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
                ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
            }
        }
    }).from(".instagram",{x:860, scale: 0.3, rotation:45, autoAlpha: 0})
        .to(".seo-title", {duration: 4, text: "SEO MANAGEMENT", delay:2})

},[])
        return (
            <div className="seo">
                <div className="row">
                    <div className=" col-md-12 ">
                        <p className="seo-title"></p>
                    </div>
                </div>
                <div className="row">
                <div className="instagram">
                    <div className="flash">
                    </div>
                    <div className="up">
                        <div className="rainbow"></div>
                        <div className="eye"></div>
                    </div>
                    <div className="lent">
                    </div>
                </div>
                </div>

            </div>
        );
}

export default Insta;