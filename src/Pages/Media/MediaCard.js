import React, { useContext, useState } from 'react';
import './MediaCard.css'

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';


const MediaCard = ({post,refetch}) => {

  const{_id,message,displayName,photo,counter,comment} = post;

  const {user} = useContext(AuthContext)
  const [count, setCount] = useState(counter + 1 || 1);

  const handleUpdatedLove = () => {
    setCount(count + 1);
    const counting = {
      count,
    }
  }

   
    
    const navigate = useNavigate();

    const navigateToPostDetails = id => {

navigate(`/post/${id}`);

    }
    return (
        <div>
            <div className= ' mt-5  mb-5'>
        <div  class="  card w-96   shadow-xl items-center">
  <figure><img style={{width:'300px',height:'300px'}}  src={photo}alt="" /></figure>
  <div class="card-body ">
    <h2 class="text-center">{message?.slice(0, 15)}...</h2>
    <p class="text-center">Posted by {displayName}</p>
   <div className='flex gap-3'>
   <div>
   <div className="postBottom">
          <div  className="postBottomLeft">
        <img src="https://raw.githubusercontent.com/safak/youtube/react-social-ui/public/assets/like.png" alt="" className='likeIcon' />
        <img src="https://raw.githubusercontent.com/safak/youtube/react-social-ui/public/assets/heart.png" alt="" className='likeIcon'  />
            <span className="postLikeCounter"></span>
          </div>
         
  </div>
   </div>

</div>
   </div> 
  
   <div className='card-actions justify-end mb-4' > 
         <button 
      onClick={()=>navigateToPostDetails(_id)}
      
      class="btn btn-outline text-blue-400 ">See Details</button>
   
         </div>
        </div>
     
</div></div>

    );
};

export default MediaCard;