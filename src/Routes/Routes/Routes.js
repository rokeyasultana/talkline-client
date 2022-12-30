import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import About from '../../Pages/About/About';
import Home from '../../Pages/Home/Home/Home';
import Media from '../../Pages/Media/Media';
import Message from '../../Pages/Message/Message';
import PostDetails from '../../Pages/PostDetails/PostDetails';
import SignIn from '../../Pages/Signup/SignIn.js/SignIn';
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
    path:'/message',
    element:<Message></Message>
},
{
    path:'/signin',
    element:<SignIn></SignIn>
},
{
    path:'/signup',
    element:<Signup></Signup>
},
{
    path:'/post/:id',
    element:<PostDetails></PostDetails>,
    loader:({params})=> fetch(`https://talkline-server-rokeyasultana.vercel.app/post/${params.id}`)
},


      ]
    }
  ]);
export default router;