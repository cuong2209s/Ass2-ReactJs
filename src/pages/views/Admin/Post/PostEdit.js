import React, {useState} from 'react'
import PropTypes from 'prop-types'
import _ from "lodash/fp";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from  'react-router-dom';

const PostEdit = ({ post, onEditPost }) => {
    
    let {id} = useParams();
    let history = useHistory();
    let posted = post.find((data) => data.id == id);
    console.log(posted)
    const [currentPost, setCurrentPost] = useState(posted);
    const onSubmitPost = (e) => {
        onEditPost(currentPost);
        history.push("/admin/post");
        };

    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setCurrentPost({
          ...currentPost,
          [name]: value,
        });
      };

    

    const { register, handleSubmit, watch, errors } = useForm();  
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitPost)} className="w-50">
                <div className="form-group">
                    <label htmlFor="postTitle">Tiêu đề</label>
                    <input type="text" name="name" 
                    defaultValue={currentPost.name} 
                    onChange={onHandleChange} 
                    className="form-control"
                    ref={register({
                        required: true,
                        maxLength: 30,
                      })} 
                   />
                    {_.get("name.type", errors) === "required" && (<span style = {{ color: "red" }}>Tên tiêu đề không được để trống</span>)}
                    {_.get("name.type", errors) === "maxLength" && (<span style = {{ color: "red" }}>Tên tiêu đề không quá 30 ký tự</span>)}
                </div>
                <div className="form-group">
                    <label htmlFor="postTitle">Ảnh bài viết</label>
                    <input type="text" name="image" 
                    defaultValue={currentPost.image} 
                    onChange={onHandleChange} 
                    className="form-control"
                    ref={register({
                        required: true,
                      })} 
                   />
                    {_.get("image.type", errors) === "required" && (<span style = {{ color: "red" }}>Ảnh bài viết không được để trống</span>)}
                </div>
                <div className="form-group">
                    <label htmlFor="postTitle">Nội dung bài viết</label>
                    <input type="text" name="content" 
                    defaultValue={currentPost.content} 
                    onChange={onHandleChange} 
                    className="form-control"
                   />
                </div>
                <div className="form-group">
                    <label htmlFor="postTitle">Mô tả ngắn</label>
                    <input type="text" name="short_desc" 
                    defaultValue={currentPost.short_desc} 
                    onChange={onHandleChange} 
                    className="form-control"
                    ref={register({
                        required: true,
                        maxLength: 100,
                      })} 
                   />
                    {_.get("short_desc.type", errors) === "required" && (<span style = {{ color: "red" }}>Mô tả ngắn không được để trống</span>)}
                </div>
                <button className="btn btn-primary">Cập nhật</button>
            </form>
        </div>
    )
}

PostEdit.propTypes = {

}

export default PostEdit
