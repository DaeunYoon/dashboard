import React from 'react';

import { Header, Stacked as StackedChart } from '../../components';

const Stacked = () => {
    return (
        <div className='m-2 md:m-10 pt-12 md:pt-10 p-2 md:p-10 dark:bg-gray-500 bg-white rounded-3xl'>
            <Header category="chart" title="Revenue Breakdown" />
            <div className="w-full">
                <StackedChart />
            </div>
        </div>
    );
};

export default Stacked;