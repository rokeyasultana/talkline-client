import React from 'react';
import Rightbar from '../../../component/Rightbar/Rightbar';
import SideBar from '../../../component/SideBar/SideBar';
import Post from '../Post/Post';
import Stories from '../Stories/Stories';
import './Home.css';

const Home = () => {
    return (
        <div>
           <Stories></Stories> 

           <div className="homeContainer">
        
        <Rightbar/>
     
  
        <Post></Post>
      </div>
        </div>
    );
};

export default Home;