import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Home = ({ products }) => {
    return (
<div>
  <div className="arriv">
    <div className="container">
      <div className="arriv-top">
        <div className="col-md-6 arriv-left">
          <img src="client/images/1.jpg" className="img-responsive" alt />
          <div className="arriv-info">
            <h3>NEW ARRIVALS</h3>
            <p>REVIVE YOUR WARDROBE WITH CHIC KNITS</p>
            <div className="crt-btn">
              <a href="details.html">TAKE A LOOK</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 arriv-right">
          <img src="client/images/2.jpg" className="img-responsive" alt />
          <div className="arriv-info">
            <h3>TUXEDO</h3>
            <p>REVIVE YOUR WARDROBE WITH CHIC KNITS</p>
            <div className="crt-btn">
              <a href="details.html">SHOP NOW</a>
            </div>
          </div>
        </div>
        <div className="clearfix"> </div>
      </div>
      <div className="arriv-bottm">
        <div className="col-md-8 arriv-left1">
          <img src="client/images/3.jpg" className="img-responsive" alt />
          <div className="arriv-info1">
            <h3>SWEATER</h3>
            <p>REVIVE YOUR WARDROBE WITH CHIC KNITS</p>
            <div className="crt-btn">
              <a href="details.html">SHOP NOW</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 arriv-right1">
          <img src="client/images/4.jpg" className="img-responsive" alt />
          <div className="arriv-info2">
            <a href="details.html"><h3>Trekking Shoes<i className="ars" /></h3></a>
          </div>
        </div>
        <div className="clearfix"> </div>
      </div>
      <div className="arriv-las">
        <div className="col-md-4 arriv-left2">
          <img src="client/images/5.jpg" className="img-responsive" alt />
          <div className="arriv-info2">
            <a href="details.html"><h3>Casual Glasses<i className="ars" /></h3></a>
          </div>
        </div>
        <div className="col-md-4 arriv-middle">
          <img src="client/images/6.jpg" className="img-responsive" alt />
          <div className="arriv-info3">
            <h3>FRESH LOOK T-SHIRT</h3>
            <div className="crt-btn">
              <a href="details.html">SHOP NOW</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 arriv-right2">
          <img src="client/images/7.jpg" className="img-responsive" alt />
          <div className="arriv-info2">
            <a href="details.html"><h3>Elegant Watches<i className="ars" /></h3></a>
          </div>
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
  </div>
  <div className="special">
    <div className="container">
      <h3>Special Offers</h3>
      <div className="specia-top">
              <ul className="grid_2">
              {products.map(({ id, name, image, price }, index) => (
              <li>
                <Link to={`/product-detail/${id}`}/><img src={image} className="img-responsive"  alt/>
                <div className="special-info grid_1 simpleCart_shelfItem">
                  <h5>{name}</h5>
                  <div className="item_add"><span className="item_price"><h6>{price}</h6></span></div>
                  <Link className="btn btn-success ml-5" to={`/product-detail/${id}`}>Chi tiết sản phẩm</Link>
                </div>
              </li>
                ))}
              <div className="clearfix"> </div>
            </ul>
      </div>
    </div>
  </div>
</div>

    )
}

Home.propTypes = {

}

export default Home
