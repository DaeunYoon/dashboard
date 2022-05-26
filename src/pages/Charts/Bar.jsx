import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, Legend, ColumnSeries, DataLabel, Tooltip }
    from '@syncfusion/ej2-react-charts';

import { barCustomSeries, barPrimaryYAxis, barPrimaryXAxis } from '../../data/dummy';
import { Header } from '../../components';

const Bar = () => {
    return (
        <div className='m-2 md:m-10 pt-12 md:pt-10 p-2 md:p-10 dark:bg-gray-500 bg-white rounded-3xl'>
            <Header category="chart" title="Olympic Medal Counts - RIO" />
            <div className="w-full">
                <ChartComponent
                    id="charts"
                    primaryXAxis={barPrimaryXAxis}
                    primaryYAxis={barPrimaryYAxis}
                    chartArea={{ border: { width: 0 } }}
                    tooltip={{ enable: true }}
                    legendSettings={{ background: 'white' }}
                >
                    <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
                    <SeriesCollectionDirective>
                        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                        {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>
    );
};

export default Bar;