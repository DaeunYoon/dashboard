import React from 'react';

const Cart = () => {
    return (
        <div className='absolute top-12 w-52 h-300 z-10 bg-white rounded-xl drop-shadow-xl flex'>
            <div className='p-3 w-full flex flex-col'>
                <p className='font-semibold'>Cart</p>
                <div className='w-full border-t-1 mt-1 text-center'>
                    Your cart is empty.
                </div>
            </div>
        </div>
    );
};

export default Cart;