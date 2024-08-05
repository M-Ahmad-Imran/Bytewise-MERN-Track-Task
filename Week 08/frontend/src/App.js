import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Shop from './Pages/Shop';
import ShopCat from './Pages/ShopCat';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import LoginRegister from './Pages/LoginRegister';
import Footer from './components/Footer/Footer';
import book_banner from './components/Assets/banner_mens.png'
import fashion_banner from './components/Assets/banner_women.png'
import crockrey_banner from './components/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/books' element={<ShopCat category="books" banner={book_banner} />} />
          <Route path='/crockrey' element={<ShopCat category="crockrey" banner={crockrey_banner} />} />
          <Route path='/fashion-accessories' element={<ShopCat category="fashion" banner={fashion_banner} />} />
          <Route path='/mobile-accessories' element={<ShopCat category="mobile" />} />
          <Route path='/product' element={<Products />}>
            <Route path=':productId' element={<Products />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginRegister />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
