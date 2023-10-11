import React from 'react'
import { Link } from 'react-router-dom';

import ShoppingCartOutlinedIcon  from '@mui/icons-material/ShoppingCartOutlined';
const Product = ({id,title,image,price,rating,specification,detail}) => {
  return (
    <div className='px-12 m-4'>
        <div>
            <Link to={`/products/${id}`}>
                <p className='font-serif text-lg'>{title}</p>
            </Link>
            <p >
                <strong>$</strong>
                <strong>{price}</strong>
            </p>
            <div className='flex space-x-2'>
                {Array(rating).fill().map((_,index)=>(<p key={index}>⭐</p>))}
            </div>
            </div>
            <img src={image} alt=""/>
            <button className='bg-yellow-400 text-lg rounded-xl '>
                <i>
                    <ShoppingCartOutlinedIcon/>
                </i>
                Add To Cart
            </button> 
        
    </div>
  )
}

export default Product