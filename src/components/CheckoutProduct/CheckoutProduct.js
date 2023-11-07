import React from 'react'
import {useDispatch} from "react-redux"
import ShoppingCartOutlinedIcon  from '@mui/icons-material/ShoppingCartOutlined';
import { removeFromBasket } from '../../redux/actions';
const CheckoutProduct = ({id,title,image,rating,price}) => {
    let dispatch=useDispatch();
    const removeItemsFromCart=()=>{
        dispatch(removeFromBasket(id))
    }
  return (
    <div>
        <img src={image} alt="cart-image"/>
        <div>
            <p>{title}</p>
            <p><strong>$</strong><strong>{price}</strong></p>
            <div className='flex flex-wrap'>{Array(rating).fill().map((_,index)=>(<p key={index}>⭐</p>))}</div>
            <button onClick={removeItemsFromCart}><i><ShoppingCartOutlinedIcon/></i>Remove Items From Cart</button>
        </div>
    </div>
  )
}

export default CheckoutProduct