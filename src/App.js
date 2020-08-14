import React, { useState,useEffect } from 'react';
import Routers from './routers'
import apiRequest from './api/productApi'
import apiRequestCategory from './api/categoryApi'
import apiPost from './api/postApi'

// import AddProduct from './components/AddProduct';
function App() {

  const [products, setProducts] = useState([apiRequest]);
  const [category, setCategory] = useState([apiRequestCategory]);
  const [post, setPost] = useState([apiPost]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await apiRequest.getAll();
        setProducts(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getProducts();
  }, []);

  //Xóa sản phẩm
  const onHandleRemove = async (id) => {
    try {
      const { data } = await apiRequest.remove(id);
      const newProducts = products.filter((product) => product.id !== id);
      setProducts(newProducts);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };

  //Thêm sản phẩm 
  const onHandleAdd = async (product) => {
    try {
      const { data } = await apiRequest.create(product);
      setProducts([
        ...products,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  // Cập nhật Products
  const onHandleEdit = async (updateProducts) => {
    const newProducts = products.map(
      (Products) =>
        Products.id === updateProducts.id ? updateProducts : Products // Nếu Products.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    );
    const { data } = await apiRequest.update(updateProducts.id, updateProducts);
    setProducts(newProducts);
  };

  // Danh sách danh mục 
  useEffect(() => {
    const getCategory = async () => {
      try {
        const { data } = await apiRequestCategory.getAll();
        setCategory(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getCategory();
  }, []);

  //Xoá danh mục
  const onCategoryRemove = async (id) => {
    try {
      const { data } = await apiRequestCategory.remove(id);
      const newCategory = category.filter(( categories )  => categories.id !== id);
      setCategory(newCategory);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };

  //Thêm danh mục
  const onHandleAddCate = async ( categories ) => {
    try {
      const { data } = await apiRequestCategory.create(categories);
      setCategory([
        ...category,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  //Sửa danh mục
  const onHandleEditCate = async (updateCategories) => {
    const newCategories = category.map(
      (Categories) =>
      Categories.id === updateCategories.id ? updateCategories : Categories // Nếu Categories.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    );
    const { data } = await apiRequestCategory.update(updateCategories.id, updateCategories);
    setCategory(newCategories);
  };

  //Danh sách post
  useEffect(() => {
    const getPost = async () => {
      try {
        const { data } = await apiPost.getAll();
        setPost(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getPost();
  }, []);

  //Xoá bài viết
  const onPostRemove = async (id) => {
    try {
      const { data } = await apiPost.remove(id);
      const newPost = post.filter(( posts )  => posts.id !== id);
      setPost(newPost);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };

  //Thêm bài viết
  const onHandleAddPost = async ( posts ) => {
    try {
      const { data } = await apiPost.create(posts);
      setPost([
        ...post,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  //Sửa bài viết
  const onHandleEditPost = async (updatePosts) => {
    const newPosts = post.map(
      (Posts) =>
      Posts.id === updatePosts.id ? updatePosts : Posts // Nếu Posts.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    );
    const { data } = await apiPost.update(updatePosts.id, updatePosts);
    setPost(newPosts);
  };

  return (
    <div className="App">
      <Routers category = {category}
               onRemoveCate = {onCategoryRemove}
               onAddCate = {onHandleAddCate}
               onEditCate = {onHandleEditCate}
               products = {products} 
               onRemove = {onHandleRemove} 
               onAdd = {onHandleAdd} 
               onEdit = {onHandleEdit} 
               post = {post}
               onRemovePost = {onPostRemove}
               onAddPost = {onHandleAddPost}
               onEditPost = {onHandleEditPost}
      />
    </div>
  )

}
export default App;