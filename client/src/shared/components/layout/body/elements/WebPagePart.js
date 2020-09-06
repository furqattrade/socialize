import React, {useRef, useEffect, useState} from 'react';
import $ from "jquery"
import './web-page-part.scss'
import webpage from '../../../../images/webpage.png'
import android from '../../../../images/android.png'
import automation from '../../../../images/automation.png'
import seo from '../../../../images/seo.png'
import eCommerce from '../../../../images/e-commerce.png'
import  naming from '../../../../images/naming.png'
import  brand from '../../../../images/brand.png'
import  blog from '../../../../images/blog.png'
import  tbot from '../../../../images/tbot.png'
import Tilt from 'react-parallax-tilt';
import ReactSwipeButton from 'react-swipe-button'


function WebPagePart () {
    const [toggle, setToggle]=useState(true)


    useEffect(()=>{
        var tabsModule = {
            config: {
                "currentSlide": 0,
                "numSlides": $(".contentPanel").length,
                "module": $(".tabsWrap"),
                "listBtn": $(".tabs li"),
                "content": $(".contentPanel"),
                "gradient": $(".gradientWrap"),
                "closeContent": $(".closeContent"),
                "mobileArrowLeft": $(".mobile-arrows .arrow-left"),
                "mobileArrowRight": $(".mobile-arrows .arrow-right")
            },

            // debounce
            debounce: function(fn, delay) {
                var timer = null;
                return function() {
                    var context = this,
                        args = arguments;
                    clearTimeout(timer);
                    timer = setTimeout(function() {
                        fn.apply(context, args);
                    }, delay);
                };
            },

            animate: function() {
                tabsModule.config.module.find(".contentPanel.active").addClass("is-animating");
                setTimeout(function() {
                    tabsModule.config.content.removeClass("is-animating active");
                    tabsModule.config.content.eq(tabsModule.config.currentSlide).addClass("active");
                }, 300);
            },

            clickTab: function() {

                tabsModule.config.listBtn.on("click", tabsModule.debounce(function(event) {

                    // Active Tab State
                    tabsModule.config.listBtn.not(this).toggleClass("active", false);
                    $(this).toggleClass("active", true);

                    tabsModule.config.currentSlide = $(this).index();

                    // Active Content Panel State

                    tabsModule.animate();

                    // Active Gradient State
                    tabsModule.config.gradient.removeClass("active");
                    tabsModule.config.gradient.eq(tabsModule.config.currentSlide).addClass("active");

                }, 300));
            },

            clickMobileArrow: function() {

                tabsModule.config.mobileArrowLeft.on("click", tabsModule.debounce(function(event) {
                    if (tabsModule.config.currentSlide <= tabsModule.config.numSlides - 1 && tabsModule.config.currentSlide > 0) {
                        tabsModule.config.currentSlide--;
                        tabsModule.animate();
                    }
                }, 300));

                tabsModule.config.mobileArrowRight.on("click", tabsModule.debounce(function(event) {
                    if (tabsModule.config.currentSlide < tabsModule.config.numSlides - 1 && tabsModule.config.currentSlide >= 0) {
                        tabsModule.config.currentSlide++;
                        tabsModule.animate();
                    }
                }, 300));
            }

        }
        tabsModule.clickTab();
        tabsModule.clickMobileArrow();

    },[])
    const onSucces=()=>{
        setToggle(false)
    }
    const swipe =()=>{
            return   toggle ?
                <ReactSwipeButton text='SWIPE TO SEE MORE' color='#482d70' onSuccess={onSucces}/>
                :
                <div></div>
        }

        return (
            <div className="web-part">
                <div className="tabsWrap">
                    <div className="titleWrap">
                        <h3><span><span>Bizning web xizmatlarimiz bilan o'z biznesingizni rivojlantiring</span></span> <span><span></span></span>
                        </h3>
                    </div>
                    <div className="centerWrap">
                        <div className="halfScreen contentLeft">
                            <div className="contentPanel active ">
                                <h5 className="panelTitle"><span><span>Har qanday murakkablikdagi web sahifalarni yaratamiz</span></span></h5>
                                <p className="panelDesc"><span><span>TEZ - SIFATLI - HAMYONBOP</span></span></p>
                                <img className="panelImg" src={webpage}/>
                            </div>
                            <div className="contentPanel">
                                <h5 className="panelTitle"><span><span>Android Dasturlash</span></span></h5>
                                <p className="panelDesc"><span><span>HAR QANDAY TALABLARGA MOS DASTURLARNI TAKLIF ETAMIZ</span></span>
                                </p>
                                <img style={{width:"250px", margin:"2rem auto"}} className="panelImg" src={android}/>
                            </div>
                            <div className="contentPanel">
                                <h5 className="panelTitle"><span><span>Ish joyini avtomatlashtirish</span></span></h5>
                                <p className="panelDesc"><span><span>ISH JOYINI AVTOMATLASHTIRISH ORQALI SAMARADORLIKKA ERISHING VA ORTIQCHA XARAJATDAN VOZ KECHING </span></span>
                                </p>
                                <img className="panelImg" src={automation}/>
                            </div>
                            <div className="contentPanel ">
                                <h5 className="panelTitle"><span><span>SEO XIZMATI</span></span></h5>
                                <p className="panelDesc"><span><span>MIJOZLARINGIZ SIZNI OSON TOPISHLARIGA YO'L BERING. ISHONAVERING BIZ BUNI EPLAYMIZ</span></span>
                                </p>
                                <img  className="panelImg" src={seo}/>
                            </div>
                            <div className="contentPanel">
                                <h5 className="panelTitle"><span><span>E-COMMERCE WEB SAXIFALARINI YARATISH</span></span></h5>
                                <p className="panelDesc"><span><span>MAXSULOTLARINGIZNI ONLINE SOTING VA TO"LOVLARNI AVTOMAT RAVISHDA QABUL QILING </span></span>
                                </p>
                                <img style={{maxHeight:"220px"}} className="panelImg" src={eCommerce}/>
                            </div>
                            <div className="contentPanel">
                                <h5 className="panelTitle"><span><span>NAMING</span></span></h5>
                                <p className="panelDesc"><span><span>BIZNESINGIZ UCHUN OSON TALAFFUZ QILINADIGAN, ESDA QOLADIGAN VA JARANGDOR NOM TOPID BERAMIZ</span></span>
                                </p>
                                <img className="panelImg" style={{width:"50%"}} src={naming}/>
                            </div>
                            <div className="contentPanel">
                                <h5 className="panelTitle"><span><span>BRANDING</span></span></h5>
                                <p className="panelDesc"><span><span>BIZ BILAN BRANDINGIZNI YARATING!</span></span>
                                </p>
                                <img className="panelImg" src={brand}/>
                            </div>
                            <div className="contentPanel">
                                <h5 className="panelTitle"><span><span>SHAXSIY BLOG </span></span></h5>
                                <p className="panelDesc"><span><span>SOXANGIZGA MOS RAVISHDA SHAXSIY BLOG SAHIFANGIZNI YARATIB BERAMIZ</span></span>
                                </p>
                                <img className="panelImg" src={blog}/>
                            </div>
                            <div className="contentPanel">
                                <h5 className="panelTitle"><span><span>TELEGRAM BOT</span></span></h5>
                                <p className="panelDesc">
                                    <span><span>BIZNESINGIZNI TELEGRAM BOT ORQALI BOSHQARING</span></span>
                                </p>
                                <img className="panelImg" src={tbot}/>
                            </div>
                            <div className="mobile-arrows">
                                <div className="arrow-left"></div>
                                <div className="arrow-right"></div>
                            </div>
                                {swipe()}
                        </div>
                        <div className="halfScreen tabsRight">
                            <ul className="tabs">
                                <li className= "active">
                                    <div className="vCenter breath-light">
                                        <div className="boxNum one">1</div>
                                        <div className="textContent">WEB SAHIFALAR YARATISH</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="vCenter breath-light">
                                        <div className="boxNum two">2</div>
                                        <div className="textContent">ANDROID DASTURLAR YARATISH</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="vCenter breath-light">
                                        <div className="boxNum three">3</div>
                                        <div className="textContent">ISH JOYINI AVTOMATLASHTIRISH</div>
                                    </div>
                                </li>
                                <li >
                                    <div className="vCenter breath-light">
                                        <div className="boxNum four">4</div>
                                        <div className="textContent">SEO</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="vCenter breath-light">
                                        <div className="boxNum five">5</div>
                                        <div className="textContent">E-COMMERCE</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="vCenter breath-light">
                                        <div className="boxNum six">6</div>
                                        <div className="textContent">NAMING
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="vCenter breath-light">
                                        <div className="boxNum seven">7</div>
                                        <div className="textContent">BRANDING
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="vCenter breath-light">
                                        <div className="boxNum eight">8</div>
                                        <div className="textContent">ShAXSIY BLOG VA PORTFOLIYO YARATISH
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="vCenter breath-light">
                                        <div className="boxNum nine">9</div>
                                        <div className="textContent">TELEGRAM BOT YARATISH</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );

}

export default WebPagePart;