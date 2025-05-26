import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
//import product from './pages/Product'
import Cart from './pages/Cart'
import Placeorder from './pages/Placeorder'
import Orders from './pages/Orders'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Title from './components/Title'
import LatestCollection from './components/LatestCollection'
import Bestseller from './components/Bestseller'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import Product from './pages/Product';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify'




const App=()=> {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] 1g:px-[9vw]'>
      <ToastContainer/>
      <Navbar/>
<SearchBar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Collection' element={<Collection/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
       
          <Route path="/product/:productId" element={<Product/>} />
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Placeorder' element={<Placeorder/>}/>
        <Route path='/Orders' element={<Orders/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Verify' element={<Verify/>}/>


        



      </Routes>

      <Footer/>

    </div>
  )
}

export default App