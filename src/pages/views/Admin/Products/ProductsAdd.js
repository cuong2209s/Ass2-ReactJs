import React, { useState } from 'react'
import PropTypes from 'prop-types'
import _ from "lodash/fp";
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';


function ProductsAdd({ onAdd, category }) {
    let history = useHistory();
    const [valueInput, setValueInput] = useState({});

    const onSubmit = (data) => {
        onAdd(data);
        history.push("/admin/products");
    }

    const { register, handleSubmit, watch, errors } = useForm();
    return (
        <div>
            <section class="content">
                <h3 className="card-title">Thêm sản phẩm</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Tên sản phẩm</label>
                        <input type="text"
                            name="name"
                            className="form-control"
                            id="inputProductName"
                            aria-describedby="emailHelp" 
                            ref={register({ required: true, maxLength: 30 })}/>
                            {_.get("name.type", errors) === "required" && (<span style = {{ color: "red" }}>Tên sản phẩm không được để trống</span>)}
                            {_.get("name.type", errors) === "maxLength" && (<span style = {{ color: "red" }}>Tên sản phẩm không quá 30 ký tự</span>)}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Ảnh sản phẩm</label>
                        <input type="text"
                            name="image"
                            className="form-control"
                            id="inputProductName"
                            aria-describedby="emailHelp" 
                            ref={register({ required: true })}/>
                             {errors.image && <span style = {{ color: "red" }}>Ảnh sản phẩm không được bỏ trống</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Gía sản phẩm</label>
                        <input type="number"
                            name="price"
                            className="form-control"
                            id="inputProductName"
                            aria-describedby="emailHelp" 
                            ref={register({ required: true })}/>
                            {errors.price && <span style = {{ color: "red" }}>Giá sản phẩm không được bỏ trống</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Gía sale</label>
                        <input type="number"
                            name="price_sale"
                            className="form-control"
                            id="inputProductName"
                            aria-describedby="emailHelp" 
                            ref={register({ required: true })}/>
                            {errors.price_sale && <span style = {{ color: "red" }}>Giá sản phẩm không được bỏ trống</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nội dung sản phẩm</label>
                        <textarea type="text"
                            name="content"
                            className="form-control"
                            id="inputProductName"
                            aria-describedby="emailHelp" 
                            ref={register({ required: true })}/>
                            {errors.content && <span style = {{ color: "red" }}>Giá sản phẩm không được bỏ trống</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Chọn danh mục</label>
                        <select className="form-control" name="category_id" ref={register({ required: true })}>
                        {category.map(({id, name},index) =>(
                            <option value = {id}>{name}</option>
                        ))}
                        </select>
                    </div>
                    <button onSubmit={handleSubmit(onSubmit)} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </section>
        </div>
    )
}

export default ProductsAdd;