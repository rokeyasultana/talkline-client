import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FaMandalorian } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Post = () => {
    const navigate = useNavigate()
  const { user } = useContext(AuthContext);

  const imgHostKey = process.env.REACT_APP_imgbb_key
  const {
    register,
    handleSubmit,
  } = useForm();

  const handlePost = (data) => {
    const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
       fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${imgHostKey}`,{
        method:"POST",
        body:formData
       })
       .then(res=>res.json())
        .then(imgData=>{
            const post = {
                message: data.message,
                photo: imgData.data.url,
                displayName: user.displayName,
                photoURL: user.photoURL,
              };
            
           
            fetch("https://talkline-server-rokeyasultana.vercel.app/post", {
              method: "POST",
           headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(post),
            })
              .then((res) => res.json())
              .then((data) =>{
                navigate('/media')
                toast.success('Post successful')
              })
              .catch((error) => console.log(error));
        })
};
    return (
        <div className='flex mx-auto gap-5 mt-10'>
         
      <div className="">
      <label
        htmlFor="my-modal-3"
        className="input input-bordered p-4 lg:px-40  text-2xl text-black">
       create post?
      </label>
      </div>
      <div>
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <h3>Create post</h3>
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <div className="divider mt-3 mb-5 text-black"></div>
            {user ? (
              <div>
                
                <form onSubmit={handleSubmit(handlePost)}>
                  <h3 className="mt-5 text-xl">
                    <textarea
                      {...register("message", { required: true })}
                      className="textarea w-full text-xl h-72"
                      placeholder="What's on your mind?"
                    ></textarea>
                  </h3>

                  <input
                    {...register("image" )}
                    type="file"
                    className=" flex justify-start"
                  />

                  <div>
                    <input
                      type="submit"
                      value="Post"
                      className="btn btn-outline text-blue-400 mt-7 w-full"
                    />
                  </div>
                </form>
              </div>
            ) : (
              <p>
        
                      <span className='ml-1 mr-2'> <Link to="SignUp" className="text-blue-300 font-medium">
                      Sign Up
                      </Link></span>
                    
              </p>
            )}
          </div>
        </div>
      </div>
        </div>
    );
};

export default Post;