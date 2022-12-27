import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import About from '../../Pages/About/About';
import Home from '../../Pages/Home/Home/Home';
import Media from '../../Pages/Media/Media';
import SignIn from '../../Pages/Signup/Signin.js/Signin';
import Signup from '../../Pages/Signup/Signup/Signup';




const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
{
    path:'/',
    element: <Home></Home>
},
{
    path:'/about',
    element: <About></About>
},
{
    path:'/media',
    element:<Media></Media>
},
{
    path:'/signin',
    element: <SignIn></SignIn>
},
{
    path:'/signup',
    element: <Signup></Signup>
},


      ]
    }
  ]);
export default router;