import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='products' element={<Products/>} />
        <Route path='product' element={<Product/>}/>
        <Route  path='cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
