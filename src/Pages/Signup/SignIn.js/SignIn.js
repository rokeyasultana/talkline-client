import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
const SignIn = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const {providerLogin,signIn} = useContext(AuthContext)
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail,setLoginUserEmail] = useState('')
    
    const location = useLocation();
    const navigate = useNavigate();
    const googleProvider =new GoogleAuthProvider();
    const from = location.state?.from?.pathname || '/';
  
    
    const handleGoogleSignIn = ()=> {
        providerLogin(googleProvider)
        .then(result =>{
       console.log(result);
        })
        .catch(error => {console.error(error)
            setLoginError(error.message);
        });
        
        };
    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
               
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
        
    }
    return (
        <div>
         <div>
    <div className='flex justify-center items-center'>
        <div className='p-7'>
            <h2 className='text-5xl text-center mb-6 font-semibold text-blue-400'>Sign in</h2>

            <div className='justify-center justify-items-center grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5'>
            <div >
<img   src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=2000" alt="" />
            </div>

            <div className="card w-96 pt-20">
  <div className="card-body">
    
  <div className=' '>
            <form className='py-5 px-5 ' onSubmit={handleSubmit(handleLogin)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="text"
                        {...register("email", {
                            required: "Email Address is required"
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Password</span></label>
                    <input type="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    <label className="label"> <span className="label-text">Forget Password?</span></label>
                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                </div>
                <input className='btn btn-outline w-full text-blue-500' value="Login" type="submit" />
                <div>
                    {loginError && <p className='text-red-600'>{loginError}</p>}
                </div>
            </form>
            <p>New to TechMate ? <Link className='text-blue-500' to="/signup">Create new Account</Link></p>
            <div className="divider">OR</div>
            <button  onClick={handleGoogleSignIn} className='btn btn-outline w-full text-blue-500'>CONTINUE WITH GOOGLE</button>
        </div>
  </div>
</div>

          
            </div>
           
            </div>
           
    </div>
        </div>
        </div>
    );
};

export default SignIn;