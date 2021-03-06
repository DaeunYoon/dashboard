import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Edit, Inject, Toolbar, Sort, Filter }
    from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from './../data/dummy';
import { Header } from '../components';
import { GiTurret } from 'react-icons/gi';

const Customers = () => {
    return (
        <div className='m-2 md:m-10 pt-12 md:pt-10 p-2 md:p-10 dark:bg-gray-500 bg-white rounded-3xl'>
            <Header category="Page" title="Customers" />
            <GridComponent
                id="gridcomp"
                dataSource={customersData}
                allowPaging
                allowSortings
                toolbar={['Delete']}
                editSettings={{ allowDeleting: true, allowEditing: true }}
                width="auto"
            >
                <ColumnsDirective>
                    {customersGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Toolbar, Selection, Sort, Filter, Edit]} />
            </GridComponent>
        </div >
    );
};

export default Customers;