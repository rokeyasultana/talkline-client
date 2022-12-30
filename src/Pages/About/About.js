import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';


const About = () => {
    const { user,setUser} = useContext(AuthContext);

const {data:details=[]} = useQuery({
    queryKey:['details'],
    queryFn : () => fetch(`https://talkline-server-rokeyasultana.vercel.app/users/${user.email}`)
    .then(res => res.json())

})

//Edit Info 
const handleUpdate = event => {
    event.preventDefault();

    fetch( `https://talkline-server-rokeyasultana.vercel.app/users/${user._id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    } )
        .then( res => res.json() )
        .then( data => {
            console.log(data);
            toast.success( 'updated successfully' )
        } )
}

const handleChange = event => {
    const value = event.target.value;
    const field = event.target.name;
    const newUser = { ...user };
    newUser[ field ] = value;
    setUser( newUser )
}

    return (
        <div>
              <div className='mt-10'>
            <h1 className='text-3xl text-center text-black mb-10'>Your Profile</h1>
            {
                user?.email ?
                    <>
                        <div className="flex mx-auto  card bg-sky-100 shadow-2xl w-96">
                            <div className='text-end'>
                            <label htmlFor="my-modal-4" className="btn btn-outline text-blue-500">Edit Info</label>

                            </div>
                           
                            <div className="card-body text-start ">
                                <h2 className='text-xl mb-2'><span className='font-semibold'>Name:</span> { user.displayName }</h2>
                                <h2 className='text-xl mb-2'><span className='font-semibold'>Email:</span> { user.email }</h2>
                                <h2 className='text-xl mb-2'><span className='font-semibold'>Address:</span> { details.address }</h2>
                                <h2 className='text-xl mb-2'><span className='font-semibold'>University:</span> { details.university }</h2>
                            </div>
                        </div>
                    </>
                    :
                    <h2 className='text-center mt-10 text-5xl'><Link to='/signin'> Sign in </Link> </h2>
            }


 
<input type="checkbox" id="my-modal-4" className="modal-toggle" />
<label htmlFor="my-modal-4" className="modal cursor-pointer">
  <label className="modal-box relative" htmlFor="">
  <div className="hero w-full mt-5">
                        <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100 py-10">
                            <h1 className="text-4xl text-center font-bold">Update Profile </h1>
                            <form onSubmit={ handleUpdate } className="card-body">
                                <div className="form-control">
                                    <input onChange={ handleChange } type="text" defaultValue={ details.name } name='name' placeholder="Enter your name" className="input input-bordered rounded-lg" />
                                </div>

                                <div className="form-control">
                                    <input onChange={ handleChange } type="email" defaultValue={ details.email } name='email' placeholder="Enter your email" className="input input-bordered rounded-lg" />
                                </div>

                                <div className="form-control">
                                    <input onChange={ handleChange } type="text" defaultValue={ details.photoUrl } name='photoUrl' placeholder="photo url" className="input input-bordered rounded-lg" />
                                </div>

                                <div className="form-control">
                                    <input onChange={ handleChange } type="text" defaultValue={ details.university} name='institute' placeholder="your institute" className="input input-bordered rounded-lg" />
                                </div>

                                <div className="form-control">
                                    <input onChange={ handleChange } type="text" defaultValue={ details.address } name='address' placeholder="your address" className="input input-bordered rounded-lg" />
                                </div>

                                <div className="form-control mt-6">
                                    <input className="btn btn-success  btn-outline text-lg" type="submit" value="Save" />
                                </div>
                            </form>
                        </div>
                    </div>
  </label>
</label>
        </div>
        </div>
    );
};

export default About;