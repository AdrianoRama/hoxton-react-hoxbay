import { useEffect, useState } from 'react'
import Header from './components/Header'
import Products from './components/Products'
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom'
import Categories from './components/Categories'
import './styles/index.css'
import CategoryProducts from './components/CategoryProducts'
import ProductDetails from './components/ProductDetails'
import Basket from './components/Basket'

function App() {

  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/products`).then(resp => resp.json())
      .then(productsFromServer => setProducts(productsFromServer))
  }, [])

  useEffect(() => {
    fetch(`http://localhost:3000/categories`).then(resp => resp.json())
      .then(categoriesFromServer => setCategories(categoriesFromServer))
  }, [])
  console.log(categories)
  return (
    <>
      <Header />
      <main>
        {
          <Routes>
            <Route index element={<Navigate replace to='/products' />} />
            <Route path='/products' element={<Products products={products} />} />
            <Route path='/products/:id' element={<ProductDetails products={products} />} />
            <Route path='/categories' element={<Categories products={products} categories={categories} />} />
            <Route path='/categories/:id' element={<CategoryProducts />} />
            <Route path='/basket' element={<Basket />} />
            <Route path='*' element={<div className='notFound' ><h2>404 Page not found  🤕 </h2></div>} />
          </Routes>
        }
      </main>
    </>
  )
}

export default App
