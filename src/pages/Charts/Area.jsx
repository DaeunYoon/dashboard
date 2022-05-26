import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, SplineAreaSeries }
    from '@syncfusion/ej2-react-charts';

import { areaCustomSeries, areaPrimaryYAxis, areaPrimaryXAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';

const Area = () => {
    const { currentMode } = useStateContext();

    return (
        <div className='m-2 md:m-10 pt-12 md:pt-10 p-2 md:p-10 dark:bg-gray-500 bg-white rounded-3xl'>
            <Header category="chart" title="Inflation Rate in Percentage" />
            <div className="w-full">
                <ChartComponent
                    id="areaChart"
                    height="420px"
                    primaryXAxis={areaPrimaryXAxis}
                    primaryYAxis={areaPrimaryYAxis}
                    chartArea={{ border: { width: 0 } }}
                >
                    <Inject services={[SplineAreaSeries, DateTime, Legend]} />
                    <SeriesCollectionDirective>
                        {
                            areaCustomSeries.map((item, index) => (
                                <SeriesDirective key={index} {...item} />
                            ))
                        }
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>
    );
};

export default Area;