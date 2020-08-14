import React, { useState } from 'react'
import PropTypes from 'prop-types';
import _ from "lodash/fp";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from  'react-router-dom';
import Swal from 'sweetalert2'



const ProductsEdit = ({ products, onEdit, category }) => {

  let { id } = useParams();
  let history = useHistory();
  let product = products.find((data) => data.id == id);
  const [currentProduct, setCurrentProduct] = useState(product);
  console.log(currentProduct);

  const onSubmit = (e) => {
    Swal.fire({
      title: 'Bạn có chắc chắn muốn sửa?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Tôi đồng ý!'
  }).then((result) => {
      if (result.value) {
        onEdit(currentProduct);
        history.push("/admin/products");
          Swal.fire(
              'Sửa thành công!',
              'Your file has been deleted.',
              'success'
          )
      }
})
   
  };
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct({
      ...currentProduct,
      [name]: value,
    });
  };

    const { register, handleSubmit, watch, errors } = useForm();
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-50">
                <div className="form-group">
                    <label htmlFor="productName">Tên sản phẩm</label>
                    <input type="text" name="name" 
                    value={currentProduct.name} 
                    onChange={onHandleChange} 
                    className="form-control"
                    ref={register({
                        required: true,
                        maxLength: 30,
                        pattern: "/^[A-Za-z]+$/i"
                      })} 
                   />
                    {_.get("name.type", errors) === "required" && (<span style = {{ color: "red" }}>Tên sản phẩm không được để trống</span>)}
                    {_.get("name.type", errors) === "maxLength" && (<span style = {{ color: "red" }}>Tên sản phẩm không quá 30 ký tự</span>)}
                    {_.get("name.type", errors) === "pattern" && (<span style = {{ color: "red" }}>Tên sản phẩm không được có ký tự đặc biệt</span>)}
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Ảnh sản phẩm</label>
                    <input type="text" 
                    name="image" value={currentProduct.image} 
                    onChange={onHandleChange} 
                    className="form-control"
                    ref={register({
                        required: true
                      })}
                    />
                      {_.get("image.type", errors) === "required" && (<span style = {{ color: "red" }}>Ảnh sản phẩm không được để trống</span>)}
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Giá sản phẩm</label>
                    <input type="number" 
                    name="price" value={currentProduct.price} 
                    onChange={onHandleChange} 
                    className="form-control"
                    ref={register({
                        required: true
                      })}
                    />
                      {_.get("price.type", errors) === "required" && (<span style = {{ color: "red" }}>Giá sản phẩm không được để trống</span>)}
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Giá sale</label>
                    <input type="number" 
                    name="price_sale" value={currentProduct.price_sale} 
                    onChange={onHandleChange} 
                    className="form-control"
                    ref={register({
                        required: true
                      })}
                    />
                      {_.get("price_sale.type", errors) === "required" && (<span style = {{ color: "red" }}>Giá sản phẩm không được để trống</span>)}
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Nội dung</label>
                    <textarea type="text" 
                    name="content" value={currentProduct.content} 
                    onChange={onHandleChange} 
                    className="form-control"
                    ref={register({
                        required: true
                      })}
                    />
                      {_.get("content.type", errors) === "required" && (<span style = {{ color: "red" }}>Giá sản phẩm không được để trống</span>)}
                </div>
                <div className="form-group">
                <label htmlFor="inputProductImage">Danh mục sản phẩm</label>
                <select type="text" name="category_id" defaultValue={currentProduct.category_id} onChange={onHandleChange} className="form-control" ref={register({ required: true })}>
                        {category && category.map(({ id, name }, index) => (
                            <option value={id}>{name}</option>
                        ))}
                </select>
                </div>
                <button className="btn btn-primary">Cập nhật</button>
            </form>
        </div>
    )
}

ProductsEdit.propTypes = {

}

export default ProductsEdit
