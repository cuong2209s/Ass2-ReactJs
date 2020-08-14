import React from 'react'
import PropTypes from 'prop-types'
import { useParams, Link } from 'react-router-dom'

const ProductsDetail = ({ products }) => {
    // console.log({products});
    let { id } = useParams();
    const product = products.find(product => product.id == id);
    console.log(product);
    return (
        <div>
            <div className="content-wrapper">
                <div>
                    <h3>Tên sản phẩm: </h3> 
                    <p>{product.name}</p>
                </div>
                <div>
                    <h3>Giá sản phẩm: </h3> 
                    <p>{product.price}</p>
                </div>
                <div>
                    <h3>Ảh sản phẩm: </h3> 
                    <p>{product.image}</p>
                </div>
            </div>
        </div>
    )
}

ProductsDetail.propTypes = {

}

export default ProductsDetail
