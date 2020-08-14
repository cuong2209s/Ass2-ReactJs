import React from 'react'
import PropTypes from 'prop-types'

const Header = props => {
    return (
        <div>
  {/* header_top */}
  <div className="top_bg">
    <div className="container">
      <div className="header_top">
        <div className="top_right">
          <ul>
            <li><a href="#">help</a></li>|
            <li><a href="contact.html">Contact</a></li>|
            <li><a href="#">Delivery information</a></li>
          </ul>
        </div>
        <div className="top_left">
          <h2><span /> Call us : 032 2352 782</h2>
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
  </div>
   {/* end header_top */}
{/* header */}
<div className="header_bg">
  <div className="container">
    <div className="header">
      <div className="head-t">
        <div className="logo">
          <a href="index.html"><img src="client/images/logo.png" className="img-responsive" alt /> </a>
        </div>
        {/* start header_right */}
        <div className="header_right">
          <div className="rgt-bottom">
            <div className="log">
              <div className="login">
                <div id="loginContainer"><a href="#" id="loginButton"><span>Login</span></a>
                  <div id="loginBox">                
                    <form id="loginForm">
                      <fieldset id="body">
                        <fieldset>
                          <label htmlFor="email">Email Address</label>
                          <input type="text" name="email" id="email" />
                        </fieldset>
                        <fieldset>
                          <label htmlFor="password">Password</label>
                          <input type="password" name="password" id="password" />
                        </fieldset>
                        <input type="submit" id="login" defaultValue="Sign in" />
                        <label htmlFor="checkbox"><input type="checkbox" id="checkbox" /> <i>Remember me</i></label>
                      </fieldset>
                      <span><a href="#">Forgot your password?</a></span>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="reg">
              <a href="register.html">REGISTER</a>
            </div>
            <div className="cart box_1">
              <a href="checkout.html">
                <h3> <span className="simpleCart_total">$0.00</span> (<span id="simpleCart_quantity" className="simpleCart_quantity">0</span> items)<img src="client/images/bag.png" alt /></h3>
              </a>	
              <p><a href="javascript:;" className="simpleCart_empty">(empty card)</a></p>
              <div className="clearfix"> </div>
            </div>
            <div className="create_btn">
              <a href="checkout.html">CHECKOUT</a>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="search">
            <form>
              <input type="text" defaultValue placeholder="search..." />
              <input type="submit" defaultValue />
            </form>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
  </div>
</div>

</div>

    )
}

Header.propTypes = {

}

export default Header
