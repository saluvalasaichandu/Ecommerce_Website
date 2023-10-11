import React from 'react'

import { headerItems,products} from '../../utils/ProductsData'
import Banner1 from "../../BannerImages/Banner1.jpg";
import Banner2 from "../../BannerImages/Banner2.jpg";
import Banner3 from "../../BannerImages/Banner3.jpg";
import Banner4 from "../../BannerImages/Banner4.jpg";
import Banner5 from "../../BannerImages/Banner5.jpg";
import Banner6 from "../../BannerImages/Banner6.jpg";
import Slider from '../../components/Slider/Slider';
import Product from '../../components/Product/Product';
const Home = () => {
  const bannerImages=[Banner1,Banner2,Banner3,Banner4,Banner5,Banner6]
  return (
    <div>
      <div className='flex justify-between font-bold bg-slate-300'>
      {headerItems&&headerItems.map((item,index)=><p>{item}</p>)}
      </div>
      <div >
        <div className='absolute  w-full'>
           {/* slider component */}
           <Slider images={bannerImages}/>
           <div className=' flex justify-between w-1/2 py-32 my-4 '>
            {products.slice(0,2).map((item)=>
              <Product key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
              specification={item.specification}
              detail={item.detail}
              />
            )}
            {/* products */}
           </div>
           <div className=' flex justify-between '>
            {products.slice(2,5).map((item)=>
              <Product key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
              specification={item.specification}
              detail={item.detail}
              />
            )}
            {/* products */}
           </div>
           <div className=' flex justify-between w-1/3 py-16 m-4'>
            {products.slice(5,6).map((item)=>
              <Product key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
              specification={item.specification}
              detail={item.detail}
              />
            )}
            {/* products */}
           </div>
           <div>
            {/* back to top */}
           </div>
           </div>
      </div>
    </div>
  )
}

export default Home