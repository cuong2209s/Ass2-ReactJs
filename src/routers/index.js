import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
//Admin - Products
import ProductsManager from '../pages/views/Admin/Products';
import ProductsAdd from '../pages/views/Admin/Products/ProductsAdd';
import ProductsDetail from '../pages/views/Admin/Products/ProductsDetail';
import ProductsEdit from '../pages/views/Admin/Products/ProductsEdit';
//Admin - Category
import CategoryManager from '../pages/views/Admin/Category';
import CategoryAdd from '../pages/views/Admin/Category/CategoryAdd';
import CategoryEdit from '../pages/views/Admin/Category/CategoryEdit';
//Admin - Post
import PostManager from '../pages/views/Admin/Post';
import PostAdd from '../pages/views/Admin/Post/PostAdd';
import PostEdit from '../pages/views/Admin/Post/PostEdit';
//Views
import DetailProducts from '../pages/views/Main/DetailProducts'
import Home from '../pages/views/Main/Home'
import Contact from '../pages/views/Main/Contact';










const Routers = ({ post, products, category, onRemove, onAdd, onEdit, onRemoveCate, onAddCate, onEditCate, onRemovePost, onAddPost, onEditPost }) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    const onHandleAdd = (product) => {
        onAdd(product)
    }
    const onHandleEdit = (id, product) =>{
        onEdit(id, product)
    }
    const onHandleRemoveCate = (id) => {
        onRemoveCate(id)
    }
    const onHandleAddCate = ( category ) =>{
        onAddCate( category )
    }
    const onHandleEditCate = (id, category) =>{
        onEditCate(id, category)
    }
    const onHandleRemovePost = (id) =>{
        onRemovePost(id)
    }
    const onHandleAddPost = (post) =>{
        onAddPost(post)
    }
    const onHandleEditPost =  (id, post) =>{
        onEditPost(id, post)
    }
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard products={products} category={category} post={post}/>
                            </Route>
                            <Route path='/admin/products'>
                                <ProductsManager products={products} category={category} onRemove={onHandleRemove} />
                            </Route>
                            <Route path='/admin/add-product' >
                                <ProductsAdd onAdd={onHandleAdd} category={category}/>
                            </Route>
                            <Route path='/admin/detail-product/:id'>
                                <ProductsDetail products={products} />
                            </Route>
                            <Route path='/admin/edit-product/:id'>
                                <ProductsEdit category={category} products={products} onEdit={onHandleEdit} />
                            </Route>
                            <Route path='/admin/category'>
                                <CategoryManager category={ category } onRemoveCate={onHandleRemoveCate}/>
                            </Route>
                            <Route path='/admin/add-category'>
                                <CategoryAdd onAddCate={onHandleAddCate} />
                            </Route>
                            <Route path='/admin/edit-category/:id'>
                                <CategoryEdit category={ category } onEditCate={onHandleEditCate}/>
                            </Route>
                            <Route path='/admin/post'>
                                <PostManager post={ post } onRemovePost={onHandleRemovePost}/>
                            </Route>
                            <Route path='/admin/add-post'>
                                <PostAdd onAddPost={onHandleAddPost}/>
                            </Route>
                            <Route path='/admin/edit-post/:id'>
                                <PostEdit post={ post } onEditPost={onHandleEditPost}/>
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutMain>
                        <Switch>
                            <Route path="/" exact>
                                <Home products = { products }/>
                            </Route>
                            <Route path="/product-detail/:id">
                                <DetailProducts products = { products } category= {category}/>
                            </Route>
                            <Route path="/contact">
                                <Contact />
                            </Route>
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
