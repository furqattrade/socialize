import React , {useEffect, useRef}from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Insta from "./elements/Insta";
import './scrolling.scss'
import WebPagePart from "./elements/WebPagePart";
import LogoDesignPage from "./elements/LogoDesignPage";
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
                duration:5,
                xPercent: -100 * (sections.length - 1),
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 1,
                    ease: "elastic.out(1, 0.3)",
                    snap: 1 / (sections.length - 1),
                    end: () => "+=" + containerRef.current.offsetWidth
                }
            });
        },[])

        return(
                <div className="container-scroll" ref={containerRef} >
                                <section ref={addToRefs}  className="panel  insta ">
                                  <Insta/>
                                </section>
                                <section  ref={addToRefs}  className="panel  ">
                                    <WebPagePart/>
                                </section>
                                <section  ref={addToRefs}  className="panel">
                                   <LogoDesignPage/>
                                </section>
                </div>
        )

}
export default Scrolling