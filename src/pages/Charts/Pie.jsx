import React from 'react';
import { pieChartData } from '../../data/dummy';
import { Header, Pie as PieChart } from '../../components';

const Pie = () => {
    return (
        <div className='m-2 md:m-10 pt-12 md:pt-10 p-2 md:p-10 dark:bg-gray-500 bg-white rounded-3xl'>
            <Header category="chart" title="Project Cost Breakdown" />
            <div className="w-full">
                <PieChart />
            </div>
        </div>
    );
};

export default Pie;
