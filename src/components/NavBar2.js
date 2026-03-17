import React, { useContext } from 'react'
import { FiSearch } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { ShopContext } from "../components/ShopContext";

const NavBar2 = () => {

  const { cart } = useContext(ShopContext);

  // ✅ Safe total count
  const totalItems = cart.reduce((acc, item) => acc + (item.qty || 1), 0);

  return (
    <div className='header2'>
      <div className='row align-items-center' id='row1'>

        {/* Logo */}
        <div className='nav-tittle col-lg-2'>
          <p className='nav-tittle-style'>
            <NavLink to="/">TechShed</NavLink>
          </p>
        </div>

        {/* Search */}
        <div className="search-container col-lg-5">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-button">
            <FiSearch size={20} />
          </button>
        </div>

        <div className='col-lg-3'></div>

        {/* Login */}
        <div className='login col-lg-1'>
          <NavLink to='Login' className="text-decoration-none text-dark">
            Log In
          </NavLink>
        </div>

        {/* 🛒 Cart */}
        <div className='col-lg-1' style={{ position: "relative" }}>

          <NavLink to='Cart' className="text-dark">

            <FaShoppingCart size={28} />

            {/* ✅ Badge */}
            {totalItems > 0 && (
              <span
                style={{
                  position: "absolute",
                  background: "black",
                  color: "white",
                  borderRadius: "50%",
                  padding: "3px 7px",
                  fontSize: "12px",
                  fontWeight: "bold"
                }}
              >
                {totalItems}
              </span>
            )}

          </NavLink>

        </div>

      </div>
    </div>
  )
}

export default NavBar2;