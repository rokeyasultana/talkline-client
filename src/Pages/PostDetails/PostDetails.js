import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    
    return (
        <div>
            <div className= ' mt-5  mb-5'>
        <div  class="flex mx-auto  card w-96  shadow-xl items-center">
  <figure><img style={{width:'500px',height:'300px'}}  src={post.photo}alt="photo" /></figure>
  <div class="card-body ">
    
    <p class="text-center">{post.message}</p>
 
    <p class="text-center mt-2">{post.displayName}</p>
 
  </div>
</div>
   </div>
        </div>
    );
};

export default PostDetails;