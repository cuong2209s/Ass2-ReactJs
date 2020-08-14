import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";


const ProductsManager = ({ onRemove, products, category }) => {
  let { id } = useParams();
  // const categories = category.find(category => category.id == id);
  const [filter, setFilter] = useState("");
  const removeHandle = (id) => {
    Swal.fire({
      title: "Bạn có chắc chắn muốn xóa không?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        onRemove(id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
    // onRemove(id);
    console.log(id);
  };

  return (
    <div>
      {/* Page Heading */}
      {/* DataTales Example */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          {/* <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6> */}

          <Link to="/admin/add-product" className="btn btn-success">
            {" "}
            Thêm sản phẩm
          </Link>

          <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group">
              <input
                className="form-control bg-light border-0 small"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Search for..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  <i className="fas fa-search fa-sm" />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">STT</th>
                  <th scope="col">Tên sản phẩm</th>
                  <th scope="col">Ảnh sản phẩm</th>
                  <th scope="col">Giá cũ</th>
                  <th scope="col">Giá sale</th>
                  <th scope="col">Mô tả sản phẩm</th>
                  <th scope="col">Danh mục</th>
                  <th scope="col">Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => {
                  if (filter.length !== 0) {
                    if (product.name.startsWith(filter)) {
                      return (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>
                           {product.name}
                          </td>
                          <td>
                            <img src={product.image} alt="" width="50" />
                          </td>
                          <td>{product.price}</td>
                          <td>{product.price_sale}</td>
                          <td>{product.content}</td>
                          <td>
                            {category.map((cate) => cate.id == product.category_id && (<p>{cate.name}</p>))}
                          </td>
                          <td>
                            <button className="btn btn-danger" onClick={() => removeHandle(product.id)}>
                              Xóa
                            </button>
                            <Link className="btn btn-primary ml-2" to={`/admin/edit-product/${product.id}`}>
                              Sửa
                            </Link>
                          </td>
                        </tr>
                      );
                    } else {
                      return null;
                    }
                  }
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>
                        <Link to={`/admin/detail-product/${product.id}`}>
                          {product.name}
                        </Link>
                      </td>
                      <td>
                        <img src={product.image} alt="" width="50" />
                      </td>
                      <td>{product.price}</td>
                      <td>{product.price_sale}</td>
                      <td>{product.content}</td>
                      <td>
                        {category.map(
                          (cate) =>
                            cate.id == product.category_id && <p>{cate.name}</p>
                        )}
                      </td>
                      <td>
                        <button className="btn btn-danger" onClick={() => removeHandle(product.id)}>
                          Xóa
                        </button>
                        <Link className="btn btn-primary ml-2" to={`/admin/edit-product/${product.id}`}>
                          Sửa
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductsManager.propTypes = {};

export default ProductsManager;