
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import banner_cats from './Components/Assets/banner_cats.jpg'
import banner_drayfoods from './Components/Assets/banner_drayfoods.jpg'
import banner_dogs from './Components/Assets/banner_dogs.jpg'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/cats' element={<ShopCategory banner={banner_cats} category="cat"/>}/>
        <Route path='/drayfoods' elecatt={<ShopCategory banner={banner_drayfoods} category="drayfood"/>}/>
        <Route path='/dogs' element={<ShopCategory banner={banner_dogs} category="dog"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;