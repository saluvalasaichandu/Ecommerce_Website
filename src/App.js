import './App.css';
// import { Switch, BrowserRouter, Route} from 'react-router-dom';
// import { Switch,Route,BrowserRouter } from 'react-router-dom';
import {Switch,Route,BrowserRouter} from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { useDispatch } from 'react-redux';
import React,{ useEffect } from 'react';
import { auth } from './utils/firebase';
import { setUser } from './redux/actions';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Checkout from './pages/Checkout/Checkout';
import Orders from './pages/Orders/Orders';
function App() {
  let dispatch=useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(setUser(authUser))
      }
      else{
        dispatch(setUser(null))
      }
    })
  },[dispatch])
  return (
    <BrowserRouter>
    <div >
     <Switch>
     <Route path="/order">
        <Header/>
        <Orders/>
      </Route>
     <Route path="/checkout">
        <Header/>
        <Checkout/>
      </Route>
     <Route path="/product/:id">
        <Header/>
        <SingleProduct/>
      </Route>
     <Route path="/register">
        <Register/>
      </Route>
      <Route path="/login">
       <Login/>
      </Route>
      <Route path="/">
        <Header/>
        <Home/>
      </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
// import { createBrowserRouter,RouterProvider } from "react-router-dom";
// import Home from "./pages/Home/Home";
// function App(){
//   const appRouter=createBrowserRouter([
//     {path:"/",
//   element:<Home/> 
//   }
//   ])
//   return(
//   <div>
//     <h1></h1>
//   </div>
//   )
// }
// export default App;