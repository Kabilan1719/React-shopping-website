import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import RouteLayout from './RouteLayout';
import About from './ShoppingModules/About'
import Contact from './ShoppingModules/Contact'
import HelpCenter from './ShoppingModules/HelpCenter'
import Login from './ShoppingModules/Login.js'
import Favorite from './ShoppingModules/Favorite.js'
import Cart from './ShoppingModules/Cart.js'
// import { createContext } from 'react';
import ShopNow from './ShoppingModules/Home/ShopNow.js';
import ShopCard from './ShoppingModules/Home/shopCard.js';
import ShopServices from './ShoppingModules/Home/ShopServices.js';
import BestSellerCard from './ShoppingModules/Home/BestSellerCard.js';
import ShopCategory from './ShoppingModules/Home/ShopCategory.js';
import OnSale from './ShoppingModules/Home/OnSale.js';
import TodaySpecial from './ShoppingModules/Home/TodaySpecial.js';
import Brands from './ShoppingModules/Home/Brands.js';
import NewsLetter from './ShoppingModules/Home/NewsLetter.js';
import Footer from './ShoppingModules/Home/Footer.js';
// export const context = createContext();


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/'element={<RouteLayout />}>
      <Route index element={<><ShopNow /><ShopCard /><ShopServices /><BestSellerCard/><ShopCategory /><OnSale /><TodaySpecial />< Brands/><NewsLetter /><Footer /></>}/>
      <Route path='About' element={<><About /><Footer /></>}/>
      <Route path='Contact' element={<><Contact /><NewsLetter /><Footer /></>}/>
      <Route path='HelpCenter' element={<><HelpCenter /><Footer /></>}/>
      {/* <Route path='tel:+1234567890' /> */}
      <Route path='Login' element={<Login />} />
      <Route path='Favorite' element={<Favorite />} />
      <Route path='Cart' element={<Cart />} />
    </Route>
  ))

  return (
    // <context.Provider value={{example:'test'}}>
      
    // </context.Provider>
    <RouterProvider router={router} />
  );
}



export default App;
