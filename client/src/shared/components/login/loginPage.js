import React, {useEffect, useState} from 'react';
import './login-page.scss'

function LoginPage () {
        const [login,setLogin]=useState(["login-container"])
        function handleToggle(){

            setLogin([...login,"active"])

        }
        function toggleLogin(){
            setLogin(login.filter(c=>c!="active"))
        }

        return (
            <div>
                <div className={login.join(" ")}>
                    <div className="card"></div>
                    <div className="card">
                        <h1 className="login-title">Login</h1>
                        <form>
                            <div className="input-container"><input type="username" id="username" required="required"/>
                            <label htmlFor="username">Username</label>
                                <div className="bar"></div>
                            </div>
                            <div className="input-container"><input type="password" id="#{label}"
                                                                    required="required"/><label
                                htmlFor="#{label}">Password</label>
                                <div className="bar"></div>
                            </div>
                            <div className="button-container">
                                <button><span>Login</span></button>
                            </div>
                            <div className="footer"><a href="#">Forget your password?</a></div>
                        </form>
                    </div>
                    <div className="card alt">
                        <div onClick={handleToggle} className="toggle">

                        </div>
                        <h1 className="login-title">Register
                            <div onClick={toggleLogin} className="close"></div>
                        </h1>
                        <form>
                            <div className="input-container"><input type="username" id="#{label}"
                                                                    required="required"/><label
                                htmlFor="#{label}">Username</label>
                                <div className="bar"></div>
                            </div>
                            <div className="input-container"><input type="password" id="#{label}"
                                                                    required="required"/><label
                                htmlFor="#{label}">Password</label>
                                <div className="bar"></div>
                            </div>
                            <div className="input-container"><input type="password" id="#{label}"
                                                                    required="required"/><label htmlFor="#{label}">Repeat
                                Password</label>
                                <div className="bar"></div>
                            </div>
                            <div className="button-container">
                                <button><span>Next</span></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );

}

export default LoginPage;