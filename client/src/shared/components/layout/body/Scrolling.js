import React , {useEffect, useRef}from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Insta from "./elements/Insta";
import './scrolling.scss'
import Phone from "./elements/Phone";

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger)
    gsap.core.globals("ScrollTrigger", ScrollTrigger)
}



function Scrolling() {

    const containerRef=useRef(null);
    const revealRef=useRef([]);
    revealRef.current=[];
    const addToRefs=(el)=>{
        if(el && !revealRef.current.includes(el)){
            revealRef.current.push(el)
        }
    }
        let sections = revealRef.current
        useEffect(()=>{
            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (sections.length - 1),
                    // base vertical scrolling on how wide the container is so it feels more natural.
                    end: () => "+=" + containerRef.current.offsetWidth
                }
            });
        },[])

        return(
                <div className="container-scroll" ref={containerRef} >
                                <section ref={addToRefs}  className="panel insta">
                                   <div className="row">
                                       <div className="col-md-6">
                                       <Insta/>
                                       </div>
                                       <div className="col-md-6"></div>
                                   </div>
                                </section>
                                <section  ref={addToRefs}  className="panel  ">
                                 <Phone/>
                                </section>
                                <section style={{backgroundColor:"green"}} ref={addToRefs}  className="panel">
                                    <h1 style={{color:"black"}}>Hello</h1>
                                </section>
                                <section style={{backgroundColor:"yellow"}} ref={addToRefs}  className="panel">
                                    <h1 style={{color:"black"}}>Hello</h1>
                                </section>
                                <section style={{backgroundColor:"red"}} ref={addToRefs}  className="panel">
                                    <h1 style={{color:"black"}}>Hello</h1>
                                </section>
                </div>
        )

}
export default Scrolling