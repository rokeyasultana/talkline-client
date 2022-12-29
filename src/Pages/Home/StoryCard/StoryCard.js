import React from 'react';
import './StoryCard.css'
const StoryCard = ({ user }) => {
    return (
        <div>
          <div className="storyCard">
      <div className="overlay"></div>
      <img src={user.profilePicture} alt="" className="storyProfile" />
      <img src={user.profilePicture} alt="" className="storybackground" />
      <span className="text">{user.username}</span>
    </div>  
        </div>
    );
};

export default StoryCard;