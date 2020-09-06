import React, {useEffect, useRef} from 'react';
import './button-style.scss'
import {gsap} from "gsap";

const InlineButton=(props)=>{
        const {extraClass, text}=props
        let styleOfBtn=Array.of('main-button','third')
        styleOfBtn.push(extraClass)
        let btn =useRef(null)
        useEffect(()=>{
        gsap.from(btn.current,{y:10,scale: 0.5, delay:1, autoAlpha:0})
        },[])


        return (
            <div>
                <button ref={btn} className={styleOfBtn.join(' ')}>{text}</button>
            </div>
        );
};



export  {InlineButton};