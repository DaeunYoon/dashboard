import React from 'react';

import { Button } from './';
import { useStateContext } from '../contexts/ContextProvider';

const UserProfile = () => {
    const { currentColor } = useStateContext();

    return (
        <div className='absolute top-12 right-0 w-52 h-300 z-10 bg-white rounded-xl drop-shadow-xl flex'>
            <div className='p-3 w-full flex flex-col'>
                <p className='font-semibold'>User Profile</p>
                <div className='w-full border-t-1 mt-1 pt-2'>
                    <p className='font-semibold'>Michael Clock</p>
                    <p>michael.clock@mail.com</p>
                    <div className='flex justify-center w-full mt-2'><Button color="white" bgColor={currentColor} text="My Account" borderRadius="10px" size="md" /></div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;