import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from 'react-icons/md';
import { IoChevronDownOutline } from 'react-icons/io5';
import { IoChevronUpOutline } from 'react-icons/io5';

import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
    const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();
    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-wthite text-md m-2 text-white';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'
    const handleSubCategory = (e) => {
        const subcategory = e.currentTarget.parentNode.querySelector('.subcategory-cont');
        const menudrop = e.currentTarget.querySelector('.menu-down');
        const menuup = e.currentTarget.querySelector('.menu-up');

        subcategory.classList.toggle('h-0');
        menudrop.classList.toggle('hidden');
        menuup.classList.toggle('hidden');
    }

    const handleCloseSideBar = () => {
        if (activeMenu && screenSize <= 1024) {
            setActiveMenu(false)
        }
    }

    return (
        <div className='ml-3 h-screen
        md:overflow-hidden overflow-auto
        md:hover:overflow-auto pb-10'>
            {activeMenu && (<>
                <div className="flex justify-between items-center">
                    <Link to='/' onClick={handleCloseSideBar}
                        className='items-center flex gap-3 ml-3 mt-4 text-xl font-extrabold'>
                        <SiShopware /><span>Shoopy</span>
                    </Link>
                    <TooltipComponent content="Menu" position="BottomCenter">
                        <button type='button' onClick={() => { setActiveMenu(false) }} className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block lg:hidden">
                            <MdOutlineCancel />
                        </button>
                    </TooltipComponent>
                </div>
                <div className="mt-10">
                    {
                        links.map(item => (
                            <div key={item.title}>
                                <p className='text-gray-400 p-3 pt-4 uppercase cursor-pointer' onClick={(e) => { handleSubCategory(e) }}>
                                    {item.title}&nbsp;
                                    <IoChevronDownOutline className='inline menu-down' />
                                    <IoChevronUpOutline className='inline hidden menu-up' />
                                </p>
                                <div className='subcategory-cont h-0 overflow-hidden'>
                                    {item.links.map(link => (
                                        <NavLink to={`/${link.name}`} key={link.name} onClick={handleCloseSideBar}
                                            style={({ isActive }) => ({
                                                backgroundColor: isActive ? currentColor : ''
                                            })}
                                            className={({ isActive }) => isActive ? activeLink : normalLink}
                                        >
                                            {link.icon}
                                            <span className='capitalize'>{link.name}</span>
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </>
            )
            }
        </div >
    );
};

export default Sidebar;