import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import MediaCard from './MediaCard';

const Media = () => {
    // const[posts,setPosts] = useState([]);
    // useEffect(()=>{
    //     fetch('https://talkline-server-rokeyasultana.vercel.app/post')
    //     .then(res=> res.json())
    //     .then(data => setPosts(data))
    // })
    // ;
    const {refetch, data:posts =[] } = useQuery({
        queryKey: ["postData"],
        queryFn: () =>
          fetch("https://talkline-server-rokeyasultana.vercel.app/post").then((res) => res.json()),
      });



    return (
        <div>
            <div >
          <h2 className='justify-center justify-items-center text-3xl text-black text-center mt-7'>All post</h2>
            <div   className='justify-center justify-items-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-base-100 mt-5  gap-4 '>
                {
                   posts.map(post => <MediaCard
                   key={post._id}
                   post={post}
                   refetch={refetch}
                   ></MediaCard>)
                }
            </div>
        
        </div> 
        </div>
    );
};

export default Media;