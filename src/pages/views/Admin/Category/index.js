import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const CategoryManager = ({ category, onRemoveCate }) => {
    const removeHandleCate = (id) => {
        Swal.fire({
            title: 'Bạn có chắc chắn muốn xóa?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Tôi đồng ý!'
        }).then((result) => {
            if (result.value) {
                onRemoveCate(id)
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
            <h1 className="h3 mb-2 text-gray-800">Danh sách danh mục</h1>
            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Mô tả danh mục</th>
                                    <th scope="col">Số lượng sản phẩm trong danh mục</th>
                                    <th rowSpan="3" scope="col">Action</th>
                                    <th><Link to="/admin/add-category" className="btn btn-success">Thêm danh mục</Link></th>
                                </tr>
                            </thead>
                            <tbody>
                                {category.map(({id, name, short_desc, count_cate }, index) => (
                                    <tr key={index}>
                                        <td>{name}</td>
                                        <td>{short_desc}</td>
                                        <td>{count_cate}</td>
                                        <td colSpan="3">
                                            <Link to={`/admin/edit-category/${id}`} className="btn btn-primary">Sửa</Link>
                                            <button className="btn btn-danger ml-2" onClick={() => removeHandleCate(id)}>Xóa</button>
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

CategoryManager.propTypes = {

}

export default CategoryManager
