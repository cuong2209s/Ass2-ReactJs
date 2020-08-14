import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const PostManager = ({ post, onRemovePost }) => {
    const removeHandlePost = (id) => {
        Swal.fire({
            title: 'Bạn có chắc chắn muốn xóa?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Tôi đồng ý!'
        }).then((result) => {
            if (result.value) {
                onRemovePost(id)
                Swal.fire(
                    'Xóa thành công!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }
    return (
        <div>
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Danh sách sản phẩm</h1>
            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Short Desc</th>
                                    <th scope="col">Content</th>
                                    <th rowSpan="3" scope="col">Action</th>
                                    <th><Link to="/admin/add-post" className="btn btn-success">Thêm bài viết</Link></th>
                                </tr>
                            </thead>
                            <tbody>
                                {post.map(( posts, index) => (
                                    <tr key={index}>
                                        <th scope="row">{posts.id}</th>
                                        <td>{posts.name}</td>
                                        <td><img src={posts.image} alt="" width="50" /></td>
                                        <td>{posts.short_desc}</td>
                                        <td>{posts.content}</td>
                                        <td colSpan="3">
                                            <Link to={`/admin/edit-post/${posts.id}`} className="btn btn-primary">Sửa</Link>
                                            <button className="btn btn-danger ml-2" onClick={() => removeHandlePost(posts.id)}>Xóa</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

PostManager.propTypes = {

}

export default PostManager
