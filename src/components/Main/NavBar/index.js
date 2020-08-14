import React from 'react';
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
  <ul className="megamenu skyblue">
    <li className="active grid"><Link to={`/`} className="color1">HOME</Link></li>
    <li className="grid"><a className="color2" href="#">SHOP</a></li>
    <li><a className="color4" href="#">BLOG</a></li>				
    <li><a className="color5" href="#">CHECKOUT</a></li>
    <li><a className="color6" href="#">ABOUT</a></li>				
    <li><Link to={`/contact`} className="color7">CONTACT</Link></li>				
    <li><a className="color9" href="#">WATCHES</a>
      <div className="megapanel">
        <div className="row">
            <div className="h_nav">
              <h4>Footwear</h4>
              <ul>
                <li><a href="women.html">new arrivals</a></li>
                <li><a href="women.html">men</a></li>
                <li><a href="women.html">women</a></li>
                <li><a href="women.html">accessories</a></li>
                <li><a href="women.html">kids</a></li>
                <li><a href="women.html">style videos</a></li>
              </ul>	
            </div>
          </div>
        <div className="row">
          <div className="col2" />
          <div className="col1" />
          <div className="col1" />
          <div className="col1" />
          <div className="col1" />
        </div>
      </div>
    </li>
  </ul> 
</div>

    )
}