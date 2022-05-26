import React from 'react';

const Chat = () => {
    return (
        <div className='absolute top-12 right-12 w-52 h-300 z-10 bg-white rounded-xl drop-shadow-xl flex'>
            <div className='p-3 w-full flex flex-col'>
                <p className='font-semibold'>Chat</p>
                <div className='w-full border-t-1 mt-1'>
                    <ul className='m-2'>
                        <li className='border-b-1 mb-2 pl-2 flex items-center'>Gedas<div className='rounded-full w-4 h-4 ml-2 bg-yellow-200 flex align-middle items-center justify-center'>2</div></li>
                        <li className='border-b-1 mb-2 pl-2 flex items-center'>Jack<div className='rounded-full w-4 h-4 ml-2 bg-blue-200 flex align-middle items-center justify-center'>4</div></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Chat;