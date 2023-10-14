import './App.css';
// import { Switch, BrowserRouter, Route} from 'react-router-dom';
// import { Switch,Route,BrowserRouter } from 'react-router-dom';
import {Switch,Route,BrowserRouter} from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';


function App() {
  return (
    <BrowserRouter>
    <div >
     <Switch>
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