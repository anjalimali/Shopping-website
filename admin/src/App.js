import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashbord from './components/Dashbord';
import Product from './components/Product';
import Navbar from './components/Navbar';
import Protectedroute from './components/Protectedroute';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='' element={<Protectedroute />}>
          <Route path='dashbord' element={<Dashbord />} />
          <Route path='product' element={<Product />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
