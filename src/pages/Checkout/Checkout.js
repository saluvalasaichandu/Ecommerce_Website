import React from 'react'
import {useSelector} from "react-redux"
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct"
import SubTotal from '../../components/SubTotal/SubTotal'

const Checkout = () => {
    const {basket, user}=useSelector((state => state.data))
  return (
    <div >
        
            <div className=' p-4 m-4 '>
        <h3 className='font-bold text-lg m-2 text-center '>Hello, {user?.email}</h3>
        <h2 className='font-bold text-lg  m-2 text-center '>{basket.length===0?"your cart is empty":"your cart"}</h2>
        {/* checkoutproduct */}
       <div className='w-1/4'>{basket && basket.map((items)=>(
            <CheckoutProduct
              key={items.id}
              id={items.id}
              image={items.image}
              title={items.title}
              rating={items.rating}
              price={items.price}/>
        ))}</div>
        </div>
        

        <div className=' p-12 text-center '>
     {/* subtotal */}
          <SubTotal/>
        </div>
    </div>
  )
}

export default Checkout;