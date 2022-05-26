import React from 'react';
import { LineChart } from '../../components';
import { Header } from '../../components';

const Line = () => {
    return (
        <div className='m-2 md:m-10 pt-12 md:pt-10 p-2 md:p-10 dark:bg-gray-500 bg-white rounded-3xl'>
            <Header category="chart" title="Inflation Rate" />
            <div className="w-full">
                <LineChart />
            </div>
        </div>
    );
};

export default Line;