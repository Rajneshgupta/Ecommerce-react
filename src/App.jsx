import './App.css';
import '../src/asset/css/style.css';
import '../src/asset/css/animation.css';
import '../src/asset/css/responsive.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Product from './pages/Product';
import Blog from './pages/Blog';
import Faq from './pages/Faq';
import Sitemap from './pages/Sitemap';
import Career from './pages/Career';
import TermCondition from './pages/TermCondition';
import Pagenotfound from './pages/Pagenotfound';
import Profile from './pages/userprofile/Profile';
import Wishlist from './pages/userwishlist/Wishlist';
import Cart from './pages/usercart/Cart';
import Blogshow from './pages/Blogshow';
import Home from './pages/home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Forget from './pages/forget/Forget';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='services' element={<Services />} />
            <Route path='product' element={<Product />} />
            <Route path='blog' element={<Blog />} />
            <Route path='blogshow' element={<Blogshow />} />
            <Route path='faq' element={<Faq/>} />
            <Route path='sitemap' element={<Sitemap/>} />
            <Route path='career' element={<Career/>} />
            <Route path='termCondition' element={<TermCondition/>} />
            <Route path='profile' element={<Profile/>} />
            <Route path='wishlist' element={<Wishlist/>} />
            <Route path='cart' element={<Cart/>} />
            <Route path='login' element={<Login/>} />
            <Route path='register' element={<Register/>} />
            <Route path='forget' element={<Forget/>} />
            <Route path='*' element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;