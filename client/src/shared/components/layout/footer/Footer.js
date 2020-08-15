import { FacebookOutlined, InstagramOutlined, StarTwoTone } from '@ant-design/icons';
function Footer() {
return(
    <footer>
        <div className="main-content">
            <div className="left box">
                <h2>About us</h2>
                <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet consequuntur cumque cupiditate deleniti distinctio ea, earum et eum harum ipsam optio pariatur possimus quia quod recusandae temporibus totam, voluptates.</p>
                    <div className="social">
                        <a href="#"><span><FacebookOutlined /></span></a>
                        <a href="#"><span><InstagramOutlined /></span></a>
                        <a href="#"><span>facebook</span></a>
                        <a href="#"><span>facebook</span></a>
                    </div>
                </div>
            </div>
            <div className="center box">
                <h2>Address</h2>
                <div className="content">
                    <div className="place">
                        <span > </span>
                        <span className="text">Tashkent </span>
                    </div>
                    <div className="phone">
                        <span > </span>
                        <span className="text">+998903725678 </span>
                    </div>
                    <div className="email">
                        <span > </span>
                        <span className="text">furqattreade@gmail.com </span>
                    </div>
                </div>
            </div>
            <div className="right box">
                <h2>Contact Us</h2>
                <div className="content">
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