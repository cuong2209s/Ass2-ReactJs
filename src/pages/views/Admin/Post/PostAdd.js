import React,{useState}from 'react'
import PropTypes from 'prop-types'
import _ from "lodash/fp";
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const PostAdd = ({ onAddPost }) => {
    let history = useHistory();
    const [valueInput, setValueInput] = useState({});

    const onSubmit = (data) => {
        onAddPost(data);
        history.push("/admin/post");
    }
    const { register, handleSubmit, watch, errors } = useForm(); 
    return (
        <div>
            <section class="content">
                <h3 className="card-title">Thêm bài viết</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Tiêu đề</label>
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
                            {errors.image && <span style = {{ color: "red" }}>Giá sản phẩm không được bỏ trống</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Mô tả ngắn sản phẩm</label>
                        <input type="text"
                            name="short_desc"
                            className="form-control"
                            id="inputProductName"
                            aria-describedby="emailHelp" 
                            ref={register({ required: true })}/>
                            {errors.short_desc && <span style = {{ color: "red" }}>Giá sản phẩm không được bỏ trống</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Chi tiết bài viết</label>
                        <textarea type="textarea"
                            name="content"
                            className="form-control"
                            id="inputProductName"
                            aria-describedby="emailHelp" 
                            ref={register({ required: true })}/>
                             {errors.content && <span style = {{ color: "red" }}>Ảnh sản phẩm không được bỏ trống</span>}
                    </div>
                    <button onSubmit={handleSubmit(onSubmit)} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </section>
        </div>
    )
}

PostAdd.propTypes = {

}

export default PostAdd
