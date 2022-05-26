import { Route, Routes } from "react-router-dom";

import React from 'react';
import {
    Ecommerce, Orders, Kanban, Area, Bar, Pie, Line, Pyramid, Stacked, Financial,
    Employees, Customers, ColorPicker, ColorMapping, Editor, Calendar
} from './pages';

const RouterPath = () => {
    return (
        <Routes>
            {/* Dashboard */}
            <Route path='/' element={<Ecommerce />} />
            <Route path='/ecommerce' element={<Ecommerce />} />
            {/* Pages */}
            <Route path='/orders' element={<Orders />} />
            <Route path='/employees' element={<Employees />} />
            <Route path='/customers' element={<Customers />} />
            {/* Apps */}
            <Route path='/kanban' element={<Kanban />} />
            <Route path='/editor' element={<Editor />} />
            <Route path='/calendar' element={<Calendar />} />
            <Route path='/color-picker' element={<ColorPicker />} />
            {/* Charts */}
            <Route path='/line' element={<Line />} />
            <Route path='/area' element={<Area />} />
            <Route path='/bar' element={<Bar />} />
            <Route path='/pie' element={<Pie />} />
            <Route path='/financial' element={<Financial />} />
            <Route path='/color-mapping' element={<ColorMapping />} />
            <Route path='/pyramid' element={<Pyramid />} />
            <Route path='/stacked' element={<Stacked />} />
        </Routes>
    );
};

export default RouterPath;
