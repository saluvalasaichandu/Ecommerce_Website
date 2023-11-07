import React from 'react'
import {useParams} from "react-router-dom";
import { products } from '../../utils/ProductsData';
import ShoppingCartOutlinedIcon  from '@mui/icons-material/ShoppingCartOutlined';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../redux/actions';
const SingleProduct = () => {
    let {id}=useParams();
    let singleProduct=products.find((item)=>item.id===id);
    let dispatch=useDispatch();

    const addItemToBasket=()=>{
        const item={
            id:singleProduct.id,
            rating:singleProduct.rating,
            title:singleProduct.title,
            price:singleProduct.price,
            image:singleProduct.image,
            specification:singleProduct.specification,
            detail:singleProduct.detail,
        };
        dispatch(addToBasket(item))
    }
  return (
    <div className='font-sans m-0 p-0'>
        <div>
            <div className='max-w-sm'>
                <img src={singleProduct.image} alt="id image"/>
            </div>
            <div className='p-2 m-2'>
                <div className='font-bold p-2 m-2'>{singleProduct.title}</div>
                <div className='flex flex-wrap p-2 m-2'>{Array(singleProduct.rating).fill().map((_,index)=>(<p key={index}>⭐</p>))}</div>
                <p className='p-2 m-2'>Price:<strong>$</strong>
                <strong>{singleProduct.price}</strong></p>
                <div className='p-2 m-2'>
                    <h4></h4>
                    {singleProduct.specification&&singleProduct.specification.map((index,item)=>{
                        <li key={index}>{item}</li>
                    })}
                </div>
                <div className='m-2'><h4 className='font-bold m-2'>Product Description</h4><p  className='m-2'>{singleProduct.detail}</p></div>
                <button onClick={addItemToBasket} className='bg-yellow-400 p-2 m-4'><i><ShoppingCartOutlinedIcon/></i>Add to basket</button>
            </div>
        </div>

    </div>
  )
}

export default SingleProduct