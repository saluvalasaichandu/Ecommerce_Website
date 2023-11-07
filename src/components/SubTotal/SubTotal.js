import React from 'react'
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../utils/BasketTotal';
const SubTotal = () => {
    const {basket,user}=useSelector(state=>state.data);
    const histoty=useHistory();
    const handleCheckOut=()=>{
        if(user){
            histoty.push("/order")
        }
        else{
            histoty.push("/login")
        }
    }
  return (
    <div className=''>
        <CurrencyFormat
        renderText={(value)=>(
            <>
            <p className='p-2 m-2 font-serif'>
                SubTotal({basket.length} items): <strong>{value}</strong>
            </p>
          {/*
             <small>
                <input type="checkbox">This order contains a gift</input>
            </small> */}
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={"$"}
        />
        <button onClick={handleCheckOut} className='bg-yellow-300  font-bold text-lg rounded-lg'>Proceed to checkout</button>
    </div>
  )
}

export default SubTotal