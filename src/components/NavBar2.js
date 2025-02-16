import React from 'react'
import { FiSearch } from "react-icons/fi";
import { NavLink } from 'react-router-dom';

const NavBar2 = () => {
  return (
    <div className='header2'>
        <div className='row' id='row1'>
            <div className='nav-tittle col-lg-2'>
                <p className='nav-tittle-style'><a href='/'>TechShed</a></p>
            </div>
            <div className="search-container col-lg-5">
                <input type="text" placeholder="Search..." className="search-input" />
                <button className="search-button">
                    <FiSearch size={20} />
                </button>
            </div>
            <div className='col-lg-5'></div>
            <div className='login col-lg-1'>
                <NavLink to='Login'>
                <a href='#'><svg data-bbox="0 0 50 50" data-type="shape" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><g><path d="M25 48.077c-5.924 0-11.31-2.252-15.396-5.921 2.254-5.362 7.492-8.267 15.373-8.267 7.889 0 13.139 3.044 15.408 8.418-4.084 3.659-9.471 5.77-15.385 5.77m.278-35.3c4.927 0 8.611 3.812 8.611 8.878 0 5.21-3.875 9.456-8.611 9.456s-8.611-4.246-8.611-9.456c0-5.066 3.684-8.878 8.611-8.878M25 0C11.193 0 0 11.193 0 25c0 .915.056 1.816.152 2.705.032.295.091.581.133.873.085.589.173 1.176.298 1.751.073.338.169.665.256.997.135.515.273 1.027.439 1.529.114.342.243.675.37 1.01.18.476.369.945.577 1.406.149.331.308.657.472.98.225.446.463.883.714 1.313.182.312.365.619.56.922.272.423.56.832.856 1.237.207.284.41.568.629.841.325.408.671.796 1.02 1.182.22.244.432.494.662.728.405.415.833.801 1.265 1.186.173.154.329.325.507.475l.004-.011A24.886 24.886 0 0 0 25 50a24.881 24.881 0 0 0 16.069-5.861.126.126 0 0 1 .003.01c.172-.144.324-.309.49-.458.442-.392.88-.787 1.293-1.209.228-.232.437-.479.655-.72.352-.389.701-.78 1.028-1.191.218-.272.421-.556.627-.838.297-.405.587-.816.859-1.24a26.104 26.104 0 0 0 1.748-3.216c.208-.461.398-.93.579-1.406.127-.336.256-.669.369-1.012.167-.502.305-1.014.44-1.53.087-.332.183-.659.256-.996.126-.576.214-1.164.299-1.754.042-.292.101-.577.133-.872.095-.89.152-1.791.152-2.707C50 11.193 38.807 0 25 0"></path></g></svg>
                &nbsp;&nbsp;&nbsp;Log In</a></NavLink>
            </div>
            <div className='fav col-lg-1'>
                <NavLink to='Favorite'>
                <a href='#'>
                    <svg preserveAspectRatio="none" data-bbox="5.3 23.175 189.725 160.625" viewBox="5.3 23.175 189.725 160.625" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="img" aria-label="My Wishlist">
                        <g><path d="M181.3 37c-18.3-18.3-47.8-18.3-66.1 0l-14.9 14.9-15-15c-18.3-18.3-47.8-18.3-66.1 0C.7 55.2.7 84.5 19 102.8l81.1 81 81.2-80.9c18.3-18.2 18.3-47.6 0-65.9z"></path></g>
                    </svg>
                </a></NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <NavLink to='Cart'>
                <a href='#kjdshfkds'><svg style={{height:'50px', width:'50px'}} xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewBox="0 0 329.7 134.5" data-hook="svg-icon-6"><path class="ptVJi9" d="M281.6 3c35.7 10.7 56 47.6 45.2 83.3s-47.6 56-83.3 45.2c-35.7-10.7-56-47.6-45.2-83.3C209 13.1 245.9-7.2 281.6 3z"></path><text x="265" y="69" dy=".35em" text-anchor="middle" class="uxskpx" data-hook="items-count">0</text><path d="M74.1 134.4c-8.7 0-16.2-7.4-16.2-16.2S65.3 102 74.1 102s16.2 7.4 16.2 16.2-7.4 16.2-16.2 16.2zm0-21.7c-3.1 0-5.6 2.5-5.6 5.6s2.5 5.6 5.6 5.6 5.6-2.5 5.6-5.6-2.5-5.6-5.6-5.6zM120.5 134.5c-8.7 0-16.2-7.4-16.2-16.2s7.4-16.2 16.2-16.2 16.2 7.4 16.2 16.2-7.4 16.2-16.2 16.2zm0-21.7c-3.1 0-5.6 2.5-5.6 5.6s2.5 5.6 5.6 5.6c3.1 0 5.6-2.5 5.6-5.6s-2.5-5.6-5.6-5.6z"></path><path d="M141.2 92.1L53.5 92.1 23 10.6 0 10.6 0 0 30.4 0 61.2 81.6 133.5 81.6 152.4 30.4 38.5 30.4 34.8 19.9 167.9 19.9z"></path></svg>
                </a></NavLink>
            </div>
        </div>
    </div>
  )
}

export default NavBar2