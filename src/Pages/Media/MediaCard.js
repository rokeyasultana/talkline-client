import React, { useContext, useState } from 'react';
import './MediaCard.css'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';


const MediaCard = ({post}) => {

    const [like,setLike] = useState(post.like)

    const [isLiked,setIsLiked] = useState(false);

const likeHandler = () => {
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)

  }
    const{_id,message,displayName,photo} = post;
    
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
        <img src="https://raw.githubusercontent.com/safak/youtube/react-social-ui/public/assets/like.png" alt="" className='likeIcon' onClick={likeHandler}/>
        <img src="https://raw.githubusercontent.com/safak/youtube/react-social-ui/public/assets/heart.png" alt="" className='likeIcon' onClick={likeHandler} />
            <span className="postLikeCounter">{like}</span>
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