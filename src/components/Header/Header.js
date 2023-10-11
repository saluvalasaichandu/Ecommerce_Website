import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShoppingCartOutlinedIcon  from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <nav className=' relative flex justify-evenly bg-gray-100 shadow-lg cursor-pointer '>
        <Link to="/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROrWrs0oWyMyoHsWoahNudnEIvPuP_X5Kovn5dmwC4&s" alt="amazon_logo" className='h-18 w-1/2' />
        </Link>
        <div>
            <LocationOnOutlinedIcon/>
        </div>
        <div>
            <span>Hello</span>
            <span>Select your address</span>
        </div>
        <div>
            <select>
                <option>All</option>
            </select>
            <input type="text"/>
            <SearchIcon/>
        </div>
        <div>
            <Link to="/login">
                <div>
                <span>Hello Guest</span>
                <span>Sign In</span>
                </div>
            </Link>
            <Link to="/orders">
                <div>
                <span>Returns</span>
                <span>orders</span>
                </div>
            </Link>
            <Link to="/checkout">
                <div>
                    <ShoppingCartOutlinedIcon/>
                <span>0</span>
               
                </div>
            </Link>
        </div>
    </nav>
  );
}

export default Header