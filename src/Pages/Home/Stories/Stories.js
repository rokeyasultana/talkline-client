import React from 'react';
import { Users } from '../../../data/data';
import StoryCard from '../StoryCard/StoryCard';
import "./Stories.css";

const Stories = () => {
    return (
        <div>
          <div id="stories " className='grid place-content-center lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-4 '>
      <div className="storyCard">
        <div className="overlay"></div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_nishQogP-1KouZwe3PwA6pIf-nJ_sdcJQ&usqp=CAU" alt="" className="storyProfile" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_nishQogP-1KouZwe3PwA6pIf-nJ_sdcJQ&usqp=CAU" alt="" className="storybackground" />
        <img src="" alt="" className="storyadd" />
        <span className="text">You</span>
      </div>

      {Users.map((u) => (
        <StoryCard key={u.id} user={u} />
      ))}
    </div>  
        </div>
    );
};

export default Stories;