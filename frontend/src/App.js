
import './App.css';
import  Navbar  from './Components/Navbar/Navbar';
import ScrollToTopButton from './Components/ScrollToTopButton';


import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Footer } from './Components/Footer/Footer';
import AllProduct from './Components/Assets/AllProduct/AllProduct'; // Adjust if needed




import Nils from './Pages/Nils';
import LoginSignUp from './Pages/LoginSignUp';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import SearchResults from './Pages/SearchResults';


import Category from './Pages/Category/Category';
import Occasion from './Pages/Occasion/Occasion';
import Featured from './Pages/Featured/Featured';


import tops_banner from './Components/Assets/Top_banner.jpg'
import dresses_banner from './Components/Assets/Dress_banner (2).jpg'
import bottoms_banner from './Components/Assets/bottom_banner.jpg'
import jumpsuits_banner from './Components/Assets/jumpsuits_banner.jpg'
import kurtas_banner from './Components/Assets/Kurtas_banner.jpg'
import footwear_banner from './Components/Assets/Footwear_banner (4).jpg'
import accessories_banner from './Components/Assets/accessories_banner.jpg'
import undergarments_banner from './Components/Assets/undergarment_banner.jpg'

import office_banner from './Components/Assets/officewear_banner (2).jpg'
import casual_banner from './Components/Assets/casualwear_banner.jpg'
import party_banner from './Components/Assets/partywear_banner.jpg'
import resort_banner from './Components/Assets/resortwear_banner.jpg'
import evening_banner from './Components/Assets/eveningwear_banner.jpeg'
import festive_banner from './Components/Assets/festivewear_banner.jpg'


import new_banner from './Components/Assets/NewCollection.jpg'
import white_banner from './Components/Assets/white_banner.jpg'
import black_banner from './Components/Assets/black_banner.jpg'
import sale_banner from './Components/Assets/2024OCTWeb-home-sub.jpg'
import gift_banner from './Components/Assets/giftvoucher_banner.jpeg'
import best_banner from './Components/Assets/bestseller_banner.jpg'







function App() {
  return (
    <div>
        <BrowserRouter>
      <Navbar/>
      
      <Routes>
  {/* Home Page */}
  <Route path="/Nils" element={<Nils />} />

  {/* Shop by Category */}
  <Route path="/Category/tops" element={<Category banner={tops_banner} category="Tops" />} />
  <Route path="/Category/dresses" element={<Category banner={dresses_banner} category="Dresses" />} />
  <Route path="/Category/bottoms" element={<Category banner={bottoms_banner} category="Bottoms" />} />
  <Route path="/Category/jumpsuits" element={<Category banner={jumpsuits_banner} category="Jumpsuits & Rompers" />} />
  <Route path="/Category/kurtas" element={<Category banner={kurtas_banner} category="Kurtas & Tunics" />} />
  <Route path="/Category/footwear" element={<Category banner={footwear_banner} category="Footwear" />} />
  <Route path="/Category/accessories" element={<Category banner={accessories_banner} category="Accessories" />} />
  <Route path="/Category/undergarments" element={<Category banner={undergarments_banner} category="Undergarments" />} />
  

  {/* Shop by Occasion */}
  <Route path="/Occasion/office" element={<Occasion banner={office_banner} Occasion="Office Wear" />} />
  <Route path="/Occasion/casual" element={<Occasion banner={casual_banner} Occasion="Casual Wear" />} />
  <Route path="/Occasion/party" element={<Occasion banner={party_banner} Occasion="Party Wear" />} />
  <Route path="/Occasion/resort" element={<Occasion banner={resort_banner} Occasion="Resort Wear" />} />
  <Route path="/Occasion/evening" element={<Occasion banner={evening_banner} Occasion="Evening Wear" />} />
  <Route path="/Occasion/festive" element={<Occasion banner={festive_banner} Occasion="Festive & Wedding" />} />
  
  

  {/* Featured & Deals */}
  <Route path="/Featured/new" element={<Featured banner={new_banner} Featured="New In" />} />
  <Route path="/Featured/white" element={<Featured banner={white_banner} Featured="White Collection" />} />
  <Route path="/Featured/black" element={<Featured banner={black_banner} Featured="Black Collection" />} />
  <Route path="/Featured/sale" element={<Featured banner={sale_banner} Featured="Clearance Sale" />} />
  <Route path="/Featured/gift" element={<Featured banner={gift_banner} Featured="Gift Vouchers" />} />
  <Route path="/Featured/best" element={<Featured banner={best_banner} Featured="Best Sellers" />} />

  <Route path='/Product/:productId' element= {<Product/>} />

  {/* Other Pages */}
  <Route path="/search" element={<SearchResults />} />
  <Route path="/Cart" element={<Cart />} />
  <Route path="/Allproduct" element={<AllProduct />} />
  
  
  <Route path="/login" element={<LoginSignUp />} />
</Routes>


      <Footer/>
      <ScrollToTopButton /> {/* Add this here */}
      </BrowserRouter>
    </div>
  )
}

export default App;
