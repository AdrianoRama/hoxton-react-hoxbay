import { useEffect, useState } from 'react'
import Header from './components/Header'
import Products from './components/Products'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Categories from './components/Categories'

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
          // <Products products={products} />
          <Categories products={products} categories={categories} />
        }
      </main>
    </>
  )
}

export default App
