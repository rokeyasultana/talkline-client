import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const About = () => {
    const { user} = useContext(AuthContext);
    return (
        <div>
            <div className='grid gap-2 justify-items-center mt-7'>
        <div class="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 bg-sky-300">
          <div class="flex justify-center mt-8">
                <img class="rounded-full border-solid border-white border-2 --mt-3" src={user?.photoURL}  />
            </div>
            <div class="text-center px-3 pb-6 pt-2">
                <h3 class="text-black mt-5 text-xl  bold font-sans"><span className='font-bold'>User:</span> {user?.displayName}</h3>
                <p class="mt-2 font-sans font-light text-xl text-black mb-8"><span className='font-bold'>Email:</span> {user?.email}</p>
            </div>

        </div>
    </div> 
        </div>
    );
};

export default About;