import { FacebookOutlined, InstagramOutlined, YoutubeOutlined ,PhoneOutlined ,MailOutlined} from '@ant-design/icons';
import React from 'react';
import './footer.scss'
function Footer() {
return(
    <footer>
        <div className="footer-main-content">
            <div className="left box">
                <h2>About us</h2>
                <div className="footer-contents">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet consequuntur cumque cupiditate deleniti distinctio ea, earum et eum harum ipsam optio pariatur possimus quia quod recusandae temporibus totam, voluptates.</p>
                    <div className="social">
                        <a href="#"><span><FacebookOutlined /></span></a>
                        <a href="#"><span><InstagramOutlined /></span></a>
                        <a href="#"><span><YoutubeOutlined /></span></a>
                    </div>
                </div>
            </div>
            <div className="center box">
                <h2>Address</h2>
                <div className="footer-contents">
                    <div className="place">
                        <span className="marker"></span>
                        <span className="text">Tashkent </span>
                    </div>
                    <div className="phone">
                        <span > <PhoneOutlined /></span>
                        <span className="text">+998903725678 </span>
                    </div>
                    <div className="email">
                        <span > <MailOutlined /></span>
                        <span className="text">furqattreade@gmail.com </span>
                    </div>
                </div>
            </div>
            <div className="right box">
                <h2>Contact Us</h2>
                <div className="footer-contents">
                    <form action="#">
                        <div className="email">
                            <div className="text">Email</div>
                            <input type="email" required />
                        </div>
                        <div className="msg">
                            <div className="text">
                                Message
                            </div>
                            <textarea required cols="25" rows="2"></textarea>
                        </div>
                        <div className="btn">
                            <button type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </footer>
        )
}
export default Footer