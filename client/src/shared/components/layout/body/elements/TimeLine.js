import React, {useEffect} from 'react';
import './timeline.scss'


function TimeLine () {

        return (
                <section id="cd-timeline" className="cd-container">

                    <div className="cd-timeline-block">
                        <div className="cd-timeline-img cd-movie"></div>

                        <div className="cd-timeline-content">
                            <h2>Talablar</h2>
                            <p>Bizning talablar oddiy va sodda . Darslarni boshlash uchun sizga ikki narsa kerak o'rganishga bo'lgan kuchli ishtiyoq va shaxsiy komputer (kamida CORE i5 )</p>
                            <span className="step">Step 1</span>
                        </div>
                    </div>

                    <div className="cd-timeline-block">
                        <div className="cd-timeline-img cd-picture">
                        </div>

                        <div className="cd-timeline-content">
                            <h2>Shartnoma tuzish </h2>
                            <p>Siz va biz o'rtamizda oddiygina shartnoma tuziladi. Oddiy rasmiyatchilik :)</p>
                            <span className="step">Step 2</span>
                        </div>
                    </div>

                    <div className="cd-timeline-block">
                        <div className="cd-timeline-img cd-picture">
                        </div>

                        <div className="cd-timeline-content">
                            <h2>Front-end </h2>
                            <p>Mana Front-end darslari ham boshlandi. Sizga biz quyidagi texnologiyalarni o'rgatamiz. <br/>
                            HTML, CSS, Bootstrap, SASS, JavaScript Basic, JavaScript Advanced, React.js va o'nlab kutubxonalar va frameworklar bilan ishlash
                            </p>
                            <span className="step">Step 3</span>
                        </div>
                    </div>

                    <div className="cd-timeline-block">
                        <div className="cd-timeline-img cd-picture">
                        </div>

                        <div className="cd-timeline-content">
                            <h2> Back-end</h2>
                            <p>Ancha ter to'kdik, endi biza siz bilan back-endni darslarini boshlaymiz. Bu qismda siz eng kuchli dasturlash tillari bo'lmish Python, Java yoki Node.js ni va ma'lumotlar dazalaridan MongoDB va PostgresSQL ni o'rganasiz</p>
                            <span className="step">Step 4</span>
                        </div>
                    </div>

                    <div className="cd-timeline-block">
                        <div className="cd-timeline-img cd-picture">
                        </div>

                        <div className="cd-timeline-content">
                            <h2>URAAA</h2>
                            <p>Tabriklaymiz endi siz full-stack developersiz . Endi sizda ikkita yo'l bor. Biz bilan qoling yoki yo'lingizda davom etin . Omad!!!</p>
                            <span className="step">step 5</span>
                        </div>
                    </div>

                </section>

        );
}

export default TimeLine;