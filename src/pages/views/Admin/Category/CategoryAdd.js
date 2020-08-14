import React, { useState } from 'react'
import PropTypes from 'prop-types'
import _ from "lodash/fp";
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function CategoryAdd ({ onAddCate }){
    let history = useHistory();
    const [valueInput, setValueInput] = useState({});
    function onHandleChange(e) {
        const { name } = e.target;
        setValueInput({
            ...valueInput,
            [name]: e.target.value,
        })
    }
    function onSubmit() {
        onAddCate(valueInput);
        history.push("/admin/category");
    }
    const { register, handleSubmit, watch, errors } = useForm();
    return (
        <div>
            <section class="content">
                <h3 className="card-title">Thêm danh mục</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Tên danh mục</label>
                        <input type="text"
                            name="name"
                            className="form-control"
                            id="inputCategoryName"
                            onChange={onHandleChange} aria-describedby="emailHelp" 
                            ref={register({ required: true, maxLength: 30 })}/>
                            {_.get("name.type", errors) === "required" && (<span style = {{ color: "red" }}>Tên danh mục không được để trống</span>)}
                            {_.get("name.type", errors) === "maxLength" && (<span style = {{ color: "red" }}>Tên danh mục không quá 30 ký tự</span>)}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Mô tả danh mục</label>
                        <input type="text"
                            name="short_desc"
                            className="form-control"
                            id="inputCategoryName"
                            onChange={onHandleChange} aria-describedby="emailHelp" 
                            ref={register({ required: true, maxLength: 100 })}/>
                            {_.get("short_desc.type", errors) === "required" && (<span style = {{ color: "red" }}>Mô tả danh mục không được để trống</span>)}
                            {_.get("short_desc.type", errors) === "maxLength" && (<span style = {{ color: "red" }}>Mô tả danh mục không quá 100 ký tự</span>)}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Số lượng sản phẩm trong danh mục</label>
                        <input type="number"
                            name="count_cate"
                            className="form-control"
                            id="inputCategoryName"
                            onChange={onHandleChange} aria-describedby="emailHelp" 
                            ref={register({ required: true, maxLength: 100 })}/>
                            {_.get("count_cate.type", errors) === "required" && (<span style = {{ color: "red" }}>Tên sản phẩm không được để trống</span>)}
                
                    </div>
                    <button onSubmit={handleSubmit(onSubmit)} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </section>
        </div>
    )
}

CategoryAdd.propTypes = {

}

export default CategoryAdd
