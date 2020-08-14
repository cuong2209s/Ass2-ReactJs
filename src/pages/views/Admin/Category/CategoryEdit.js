import React, { useState } from 'react'
import PropTypes from 'prop-types'
import _ from "lodash/fp";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from  'react-router-dom';
import Swal from 'sweetalert2'


function CategoryEdit ({ category,onEditCate }) {
  let { id } = useParams();
  let history = useHistory();
  let categories = category.find((data) => data.id == id);

  const [currentCategory, setCurrentCategory] = useState(categories);

  function onHandleChange (e) {
    const { name, value } = e.target;
    setCurrentCategory({
      ...currentCategory,
      [name]: value,
    });
  };

  function onSubmit (e) {
    Swal.fire({
      title: 'Bạn có chắc chắn muốn sửa?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Tôi đồng ý!'
  }).then((result) => {
      if (result.value) {
        onEditCate(currentCategory);
        history.push("/admin/category");
          Swal.fire(
              'Sửa thành công!',
              'Your file has been deleted.',
              'success'
          )
      }
    })   
  };
    const { register, handleSubmit, watch, errors } = useForm();
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-50">
                <div className="form-group">
                    <label htmlFor="productName">Tên danh mục</label>
                    <input type="text" name="name" 
                    value={currentCategory.name} 
                    onChange={onHandleChange} 
                    className="form-control"
                    ref={register({
                        required: true,
                        maxLength: 30,
                      })} 
                   />
                    {_.get("name.type", errors) === "required" && (<span style = {{ color: "red" }}>Tên danh mục không được để trống</span>)}
                    {_.get("name.type", errors) === "maxLength" && (<span style = {{ color: "red" }}>Tên danh mục không quá 30 ký tự</span>)}
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Mô tả danh mục</label>
                    <input type="text" name="short_desc" 
                    value={currentCategory.short_desc} 
                    onChange={onHandleChange} 
                    className="form-control"
                    ref={register({
                        required: true, 
                        maxLength: 100,
                      })} 
                   />
                    {_.get("short_desc.type", errors) === "required" && (<span style = {{ color: "red" }}>Mô tả danh mục không được để trống</span>)}
                    {_.get("short_desc.type", errors) === "maxLength" && (<span style = {{ color: "red" }}>Mô tả danh mục không quá 100 ký tự</span>)}
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Số lượng sản phẩm trong danh mục</label>
                    <input type="text" name="count_cate" 
                    value={currentCategory.count_cate} 
                    onChange={onHandleChange} 
                    className="form-control"
                    ref={register({
                        required: true, 
                        maxLength: 100,
                      })} 
                   />
                    {_.get("count_cate.type", errors) === "required" && (<span style = {{ color: "red" }}>Mô tả danh mục không được để trống</span>)}
                </div>
                <button className="btn btn-primary">Cập nhật</button>
            </form>
        </div>
    )
}

CategoryEdit.propTypes = {

}

export default CategoryEdit
