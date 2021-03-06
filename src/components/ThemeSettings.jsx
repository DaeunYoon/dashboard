import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { themeColors } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const ThemeSettings = () => {
    const { currentColor,
        currentMode,
        setColor,
        setMode,
        themeSettings,
        setThemeSettings } = useStateContext();

    return (
        <div className='theme-settings bg-half-transparent w-screen fixed top-0 right-0 z-10'>
            <div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-gray-500 w-400">
                <div className="flex justify-between items-center p-4 ml-4">
                    <p className="font-semibold text-lg">Settings</p>
                    <button type='button' onClick={(e) => setThemeSettings(false)} style={{ color: 'rgb(153,171,180)', borderRadius: '50%' }}
                        className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
                    >
                        <MdOutlineCancel />
                    </button>
                </div>
                <div className="flex-col border-t-1 border-color p-4 ml-4">
                    <p className="font-semibold text-xl">Theme Options</p>
                    <div className="mt-4">
                        <input type="radio" id="light" name="theme" value="Light" className="cursor-pointer" onClick={(e) => { setMode(e) }} checked={currentMode === 'Light'} />
                        <label htmlFor="light" className='ml-2 text-md cursor-pointer'>Light</label>
                    </div>
                    <div className="mt-4">
                        <input type="radio" id="dark" name="theme" value="Dark" className="cursor-pointer" onClick={(e) => { setMode(e) }} checked={currentMode === 'Dark'} />
                        <label htmlFor="dark" className='ml-2 text-md cursor-pointer'>Dark</label>
                    </div>
                </div>
                <div className="flex-col border-t-1 border-color p-4 ml-4">
                    <p className="font-semibold text-xl">Theme Colors</p>
                    <div className="flex gap-3">
                        {themeColors.map((item, index) => (
                            <TooltipComponent key={index} content={item.name} position={'TopCenter'}>
                                <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
                                    <button
                                        type="button"
                                        className='cursor-pointer h-10 w-10 rounded-full'
                                        style={{ backgroundColor: item.color }}
                                        onClick={() => setColor(item.color)}
                                    >
                                        <BsCheck className={`ml-w text-2xl text-white w-full text-center ${currentColor === item.color ? 'block' : 'hidden'}`} />
                                    </button>
                                </div>
                            </TooltipComponent>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ThemeSettings;