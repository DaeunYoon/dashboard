import React from 'react';

const Notification = () => {
    return (
        <div className='absolute top-12 right-4 w-52 h-300 z-10 bg-white rounded-xl drop-shadow-xl flex'>
            <div className='p-3 w-full flex flex-col'>
                <p className='font-semibold'>Notification</p>
                <div className='w-full border-t-1 mt-1 text-center'>
                    You don't have new notification.
                </div>
            </div>
        </div>
    );
};

export default Notification;