import React from 'react';
import Rightbar from '../../../component/Rightbar/Rightbar';
import Stories from '../Stories/Stories';
import './Home.css';

const Home = () => {
    return (
        <div>
           <Stories></Stories> 

           <div className="homeContainer">
        
        <Rightbar/>
      </div>
        </div>
    );
};

export default Home;