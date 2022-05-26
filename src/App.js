import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import RouterPath from './RouterPath';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import {
    Ecommerce, Orders, Kanban, Area, Bar, Pie, Line, Pyramid, Stacked, Financial,
    Employees, Customers, ColorPicker, ColorMapping, Editor, Calendar
} from './pages'; import './App.css';
import { useStateContext } from './contexts/ContextProvider';


const App = () => {
    const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();

    return (
        <div className={currentMode === 'Dark' ? 'dark' : ''
        }>
            <BrowserRouter>
                {/* {activeMenu ? (
                    <div className='w-72 fixed sidebar dark:bg-gray-500 bg-white'>
                        <Sidebar />
                    </div>)
                    : (<div className='w-0 dark:bg-secondary-dark-bg'><Sidebar /></div>)} */}
                <div className="flex relativ dark:bg-main-dark-bg">
                    <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                        <TooltipComponent content="Settings" position='Top'>
                            <button type="button"
                                onClick={() => setThemeSettings(true)}
                                className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                                style={{ backgroundColor: currentColor, borderRadius: '50%' }}>
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                    {activeMenu ? (
                        <div className='w-72 fixed sidebar dark:bg-gray-500 bg-white'>
                            <Sidebar />
                        </div>)
                        : (<div className='w-0 dark:bg-secondary-dark-bg'><Sidebar /></div>)}
                    <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-column'}`}>
                        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full"><Navbar /></div>
                        {themeSettings && <ThemeSettings />}
                        <RouterPath />
                    </div>
                </div>
            </BrowserRouter>
        </div >
    );
};

export default App;