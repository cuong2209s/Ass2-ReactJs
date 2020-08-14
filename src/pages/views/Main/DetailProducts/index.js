import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router'

  const DetailProducts =  ({ products, category }) => {
      let { id } = useParams();
      const product = products.find(product => product.id == id);
    return (
<div>
  <div className="women_main">
    {/* start content */}
    <div className="row single">
      <div className="col-md-9 det">
        <div className="single_left">
          <div className="grid images_3_of_2">
            <ul id="etalage">
                <img className="etalage_thumb_image" class="img-responsive" src={product.image} />
            </ul>
            <div className="clearfix" />		
          </div>
          <div className="desc1 span_3_of_2">
            <h3>Tên sản phẩm: {product.name}</h3>

            {category.map((cate) => cate.id == product.category_id && <span className="code">Danh mục: {cate.name}</span>)}
            {/* <p>when an unknown printer took a galley of type and scrambled it to make</p> */}
            <div className="price">
              <span className="text">Gía tiền: </span>
              <span className="price-new">{product.price_sale}VNĐ</span>
              <span className="price-old">{product.price}VNĐ</span> 
              {/* <span className="price-tax">Ex Tax: $90.00</span><br />
              <span className="points"><small>Price in reward points: 400</small></span><br /> */}
            </div>
            <div className="det_nav1">
              <h4>Select a size :</h4>
              <div className=" sky-form col col-4">
                <ul>
                  <li><label className="checkbox"><input type="checkbox" name="checkbox" /><i />L</label></li>
                  <li><label className="checkbox"><input type="checkbox" name="checkbox" /><i />S</label></li>
                  <li><label className="checkbox"><input type="checkbox" name="checkbox" /><i />M</label></li>
                  <li><label className="checkbox"><input type="checkbox" name="checkbox" /><i />XL</label></li>
                </ul>
              </div>
            </div>
            <div className="btn_form">
              <a href="checkout.html">buy</a>
            </div>
            <a href="#"><span>login to save in wishlist </span></a>
          </div>
          <div className="clearfix" />
        </div>
        <div className="single-bottom1">
          <h6>Chi tiết sản phẩm</h6>
          <p className="prod-desc">{product.content}</p>
        </div>
      </div>	
      <div className="col-md-3">
        <div className="w_sidebar">
          <div className="w_nav1">
            <h4>All</h4>
            <ul>
              <li><a href="women.html">women</a></li>
              <li><a href="#">new arrivals</a></li>
              <li><a href="#">trends</a></li>
              <li><a href="#">boys</a></li>
              <li><a href="#">girls</a></li>
              <li><a href="#">sale</a></li>
            </ul>	
          </div>
          <h3>filter by</h3>
          <section className="sky-form">
            <h4>catogories</h4>
            <div className="row1 scroll-pane">
              <div className="col col-4">
                <label className="checkbox"><input type="checkbox" name="checkbox" defaultChecked /><i />kurtas</label>
              </div>
              <div className="col col-4">
                <label className="checkbox"><input type="checkbox" name="checkbox" /><i />kutis</label>
                <label className="checkbox"><input type="checkbox" name="checkbox" /><i />churidar kurta</label>
                <label className="checkbox"><input type="checkbox" name="checkbox" /><i />salwar</label>
                <label className="checkbox"><input type="checkbox" name="checkbox" /><i />printed sari</label>
                <label className="checkbox"><input type="checkbox" name="checkbox" /><i />shree</label>
                <label className="checkbox"><input type="checkbox" name="checkbox" /><i />Anouk</label>
                <label className="checkbox"><input type="checkbox" name="checkbox" /><i />biba</label>
                <label className="checkbox"><input type="checkbox" name="checkbox" /><i />fashion sari</label>
                <label className="checkbox"><input type="checkbox" name="checkbox" /><i />fashion sari</label>
                <label className="checkbox"><input type="checkbox" name="checkbox" /><i />fashion sari</label>
                <label className="checkbox"><input type="checkbox" name="checkbox" /><i />fashion sari</label>
                <label className="checkbox"><input type="checkbox" name="checkbox" /><i />fashion sari</label>
                <label className="checkbox"><input type="checkbox" name="checkbox" /><i />fashion sari</label>
                <label className="checkbox"><input type="checkbox" name="checkbox" /><i />fashion sari</label>
                <label className="checkbox"><input type="checkbox" name="checkbox" /><i />fashion sari</label>	
              </div>
            </div>
          </section>
          <section className="sky-form">
            <h4>brand</h4>
            <div className="row1 scroll-pane">
              <div className="col col-4">
                <label className="checkbox"><input type="checkbox" name="checkbox" defaultChecked /><i />shree</label>
                <label className="checkbox"><input type="checkbox" name="checkbox" /><i />Anouk</label>
                <label className="checkbox"><input type="checkbox" name="checkbox" /><i />biba</label>
              </div>
              <div className="col col-4">
                <label className="checkbox"><input type="checkbox" name="checkbox" /><i />vishud</label>
                <label className="checkbox"><input type="checkbox" name="checkbox" /><i />amari</label>
                <label className="checkbox"><input type="checkbox" name="checkbox" /><i />shree</label>
                <label className="checkbox"><input type="checkbox" name="checkbox" /><i />Anouk</label>
                <label className="checkbox"><input type="checkbox" name="checkbox" /><i />biba</label>
                <label className="checkbox"><input type="checkbox" name="checkbox" /><i />shree</label>
                <label className="checkbox"><input type="checkbox" name="checkbox" /><i />Anouk</label>
                <label className="checkbox"><input type="checkbox" name="checkbox" /><i />biba</label>
                <label className="checkbox"><input type="checkbox" name="checkbox" /><i />shree</label>
                <label className="checkbox"><input type="checkbox" name="checkbox" /><i />Anouk</label>
                <label className="checkbox"><input type="checkbox" name="checkbox" /><i />biba</label>																								
              </div>
            </div>
          </section>
          <section className="sky-form">
            <h4>colour</h4>
            <ul className="w_nav2">
              <li><a className="color1" href="#" /></li>
              <li><a className="color2" href="#" /></li>
              <li><a className="color3" href="#" /></li>
              <li><a className="color4" href="#" /></li>
              <li><a className="color5" href="#" /></li>
              <li><a className="color6" href="#" /></li>
              <li><a className="color7" href="#" /></li>
              <li><a className="color8" href="#" /></li>
              <li><a className="color9" href="#" /></li>
              <li><a className="color10" href="#" /></li>
              <li><a className="color12" href="#" /></li>
              <li><a className="color13" href="#" /></li>
              <li><a className="color14" href="#" /></li>
              <li><a className="color15" href="#" /></li>
              <li><a className="color5" href="#" /></li>
              <li><a className="color6" href="#" /></li>
              <li><a className="color7" href="#" /></li>
              <li><a className="color8" href="#" /></li>
              <li><a className="color9" href="#" /></li>
              <li><a className="color10" href="#" /></li>
            </ul>
          </section>
          <section className="sky-form">
            <h4>discount</h4>
            <div className="row1 scroll-pane">
              <div className="col col-4">
                <label className="radio"><input type="radio" name="radio" defaultChecked /><i />60 % and above</label>
                <label className="radio"><input type="radio" name="radio" /><i />50 % and above</label>
                <label className="radio"><input type="radio" name="radio" /><i />40 % and above</label>
              </div>
              <div className="col col-4">
                <label className="radio"><input type="radio" name="radio" /><i />30 % and above</label>
                <label className="radio"><input type="radio" name="radio" /><i />20 % and above</label>
                <label className="radio"><input type="radio" name="radio" /><i />10 % and above</label>
              </div>
            </div>						
          </section>
        </div>
      </div>
      <div className="clearfix" />		
    </div>
    {/* end content */}
  </div>
</div>

    )
}

DetailProducts.propTypes = {

}

export default DetailProducts
