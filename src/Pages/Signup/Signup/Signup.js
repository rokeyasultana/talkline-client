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
                toast('User Created Successfully.')
                const userInfo = {
                    displayEmail:data.email,
                    displayName: data.name,
                    

                }
                console.log(userInfo );
                updateUser(userInfo)
                    .then(() => { 
                 
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
       
            });
    }

    
    return (
        <div>
             <div>
                <div>
    <div className='flex justify-center items-center'>
        <div className='p-7'>
            <h2 className='text-5xl text-center mb-6 font-semibold text-blue-400'>Sign in</h2>

            <div className='justify-center justify-items-center grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5'>
            <div >
<img   src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?w=2000" alt="" />
            </div>
            <div className="card w-96 pt-20">
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