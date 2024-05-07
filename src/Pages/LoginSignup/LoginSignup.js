import React from 'react'
import '../LoginSignup/LoginSignup.css'

const LoginSignup = () => {
    return (
        <div classNameName="login">
            <div className="login-page">
                <form action="">
                    <div className="upper-form">
                        <h2>Login</h2>
                        <a href="">Doesn't have an account yet?</a>
                        <a href="" className="sign-up">Sign up</a>
                    </div>
                    <div className="center-form">
                        <div className="email">
                            <h4>Email Address</h4>
                            <input type="email" id="email" placeholder="you@examlple.com" />
                        </div>

                        <div className="password">
                            <div className="password-heading">
                                <a href="">Password</a>
                                <a className="forgot">Forgot Password?</a>
                            </div>

                            <input type="password" id="password" placeholder="Enter 8 characters or more" />
                        </div>

                        <div className="checkbox">
                            <input type="checkbox" id="checkbox" />
                            <a href="">Remember me</a>
                        </div>
                        <div className="submit">
                            <input type="button" value="Login" id="login" />
                        </div>
                    </div>

                    <div className="lower-form">
                        <div className="text-gap">
                            <span></span>
                            <p className="center-text">or login with</p>
                            <span></span>
                        </div>

                        <div className="media-icons">
                            <div className="icon-1">
                                <span><i className="ri-google-fill"></i></span>
                                <p>Google</p>
                            </div>

                            <div className="icon-2">
                                <i className="ri-facebook-fill"></i>
                                <p>Facebook</p>
                            </div>
                        </div>

                    </div>

                </form>
                <div className="login-image">
                    <img src="https://img.freepik.com/free-vector/man-going-trip-booking-tour-online-guy-sitting-front-computer-table-looking-voyage-summer-vacation_575670-946.jpg?w=740&t=st=1701020596~exp=1701021196~hmac=2e9d3193233d5c9568860bd354b916da162ee68b02d643296dfac95b25a88e58"
                        alt="" />
                </div>
            </div>
        </div>
    )
}


export default LoginSignup