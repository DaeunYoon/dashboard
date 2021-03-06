import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';

import { Stacked, Pie, Button, SparkLine } from '../components';
import { earningData, SparklineAreaData, ecomPieChartDat } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { IoTerminal } from 'react-icons/io5';

const Ecommerce = () => {
    const { currentColor } = useStateContext()

    return (
        <div className='mt-12'>
            <div className="flex flex-wrap lg:flex-nowrap justify-center">
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 
                rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center ">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className='font-bold text-gray-400'>Earnings</p>
                            <p className='text-2xl'>$63,448.78</p>
                            <div className="mt-6">
                                <Button color="white" bgColor={currentColor} text="Download" borderRadius="10px" size="md" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
                    {
                        earningData.map(earning => (
                            <div key={earning.title} className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>
                                <button type='button'
                                    style={{ color: earning.iconColor, backgroundColor: earning.iconBg }}
                                    className='text-2xl opacity-90 rounded-full p-4 hover:drop-shadow-xl'
                                >{earning.icon}</button>
                                <p className="mt-3">
                                    <span className="text-lg font-semibold">
                                        {earning.amount}
                                    </span>
                                    <span className={`text-sm text-${earning.pcColor} ml-2`}>
                                        {earning.percentage}
                                    </span>
                                </p>
                                <p className='text-gray-400 text-sm mt-1'>
                                    {earning.title}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='flex gap-10 flex-wrap justify-center'>
                <div className="bg-white drak:text-gray-200 dark:bg-secondary-dark-bg m-3 p-5 rounded-2xl w-full">
                    <div className="flex justify-between">
                        <p className='font-semibold text-xl'>Revenue Updates</p>
                        <div className="flex items-center gap-4">
                            <p className='flex items-center gap-2 text-gray-600 cursor-pointer hover:drop-shadow-xl'>
                                <span>
                                    <GoPrimitiveDot />
                                </span>
                                <span>
                                    Expense
                                </span>
                            </p>
                            <p className='flex items-center gap-2 text-green-400 cursor-pointer hover:drop-shadow-xl'>
                                <span>
                                    <GoPrimitiveDot />
                                </span>
                                <span>
                                    Budget
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 flex gap-10 flex-wrap justify-center">
                        <div className="border-r-1 border-color m-4 pr-10">
                            <div>
                                <p>
                                    <span className='text-3xl font-semibold'>$93,438</span>
                                </p>
                                <p className="text-gray-500 mt-1">Expense</p>
                            </div>
                            <div className='mt-8'>
                                <p>
                                    <span className='text-3xl font-semibold'>$48,438</span>
                                    <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>23%</span>
                                </p>
                                <p className="text-gray-500 mt-1">Budget</p>
                            </div>
                            <div className='mt-5'>
                                <SparkLine currentColor={currentColor} id="line-sparkline" type="Line" height="80px" width="250px" data={SparklineAreaData} color="blue" />
                            </div>
                            <div className="mt-10">
                                <Button bgColor={currentColor} color="white" text="Download Report" borderRadius='10px' />
                            </div>
                        </div>
                        <div>
                            <Stacked width="320px" height="360px" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Ecommerce;