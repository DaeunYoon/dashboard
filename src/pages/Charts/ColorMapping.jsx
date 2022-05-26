import React from 'react';
import {
    ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Tooltip, Legend,
    RangeColorSettingsDirective, RangeColorSettingDirective
} from '@syncfusion/ej2-react-charts';

import { Header } from '../../components';
import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping } from '../../data/dummy';

const ColorMapping = () => {
    return (
        <div className='m-2 md:m-10 pt-12 md:pt-10 p-2 md:p-10 dark:bg-gray-500 bg-white rounded-3xl'>
            <Header category="chart" title="USA CLIMATE - WEATHER BY MONTH" />
            <div className="w-full">
                <ChartComponent
                    id="colorMapping"
                    primaryXAxis={ColorMappingPrimaryXAxis}
                    primaryYAxis={ColorMappingPrimaryYAxis}
                    chartArea={{ border: { width: 0 } }}
                    tooltip={{ enable: true }}
                    legendSettings={{ mode: 'Range', background: 'white' }}
                >
                    <Inject services={[ColumnSeries, Legend, Category, Tooltip]} />
                    <SeriesCollectionDirective>
                        <SeriesDirective
                            dataSource={colorMappingData[0]}
                            name="USA"
                            xName='x'
                            yName='y'
                            type='Column'
                            cornerRadius={{
                                topLeft: 10,
                                topRight: 10
                            }}
                        />
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div >
    );
};

export default ColorMapping;