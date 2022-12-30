import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);

    const [signUpError, setSignUPError] = useState('');

    const [createdUserEmail, setCreatedUserEmail] = useState('');
   

 const navigate = useNavigate();



    const handleSignUp = (data) => {

        // console.log(data);
        setSignUPError('');
        createUser(data.email, data.password, data.role )

            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Created Successfully.')
                const userInfo = {
                    displayEmail:data.email,
                    displayName: data.name,
                    displayAddress: data.address,
                    displayUniversity: data.university,
                    
                }
                console.log(userInfo );
                updateUser(userInfo)
                    .then(() => { 
                        saveUser(data.name,data.email,data.address, data.university)
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
       
            });
    }
    const saveUser = (name,email,address,university) =>{
        const user = {name,email,address, university} ;
 
        fetch('http://localhost:5000/users',{
         method: 'POST',
         headers:{
             'content-type': 'application/json'
         },
         body: JSON.stringify(user)
        })
 
        .then(res => res.json())
        .then(data => {
        setCreatedUserEmail(email);
        })
     };
    
    return (
        <div>
             <div>
                <div>
    <div className=' justify-center items-center'>
        <div >
            <h2 className='text-5xl text-center  font-semibold text-blue-400 mt-5'>Sign up</h2>

            <div>
           
            <div className="card flex mx-auto w-96 ">
  <div className="card-body">
    
  <div>
  <form  className='py-5 px-5' onSubmit={handleSubmit(handleSignUp)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Address</span></label>
                    <input type="text" {...register("address", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.address.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">University</span></label>
                    <input type="text" {...register("university", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.university.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Password</span></label>
                    <input type="password" {...register("password", {
                        required: "Password is required",
                        minLength: { value: 6, message: "Password must be 6 characters long" },
                        pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                </div>

                <input className='btn  btn-outline w-full text-blue-500 mt-4' value="Sign Up" type="submit" />
                {signUpError && <p className='text-red-600'>{signUpError}</p>}
            </form>
            <p>Already have an account? <Link className='text-blue-500' to="/signin">Please sign in</Link></p>

        </div>
  </div>
</div>


 
            </div>
           
            </div>
            <Toaster />
    </div>
        </div> 
        </div>
        </div>
    );
};

export default Signup;