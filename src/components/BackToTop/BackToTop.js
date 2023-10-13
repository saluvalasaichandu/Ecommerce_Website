import React from 'react'
import { useState,useEffect } from 'react'
const BackToTop = () => {
    const[isVisible,setIsVisible]=useState(false);
    const toggleVisibility=()=>{
        if(window.pageYOffset>900){
            setIsVisible(true)
        }
        else{
            setIsVisible(false)
        }
    };
    const scrollToTop=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    };
    useEffect(()=>{
        window.addEventListener("scroll",toggleVisibility);
        return()=>{
            window.removeEventListener("scroll",toggleVisibility);
        }
    },[]);
  return (
    <div className='text-center font-semibold lg bg-amber-400'>
        {isVisible&&(<div onClick={scrollToTop}>Back To Top</div>)}
    </div>
  )
};

export default BackToTop;