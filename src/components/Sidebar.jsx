import React from 'react';
import {FaTimes} from 'react-icons/fa'
import { useGlobalContext } from '../context/UsersContext';


function Sidebar() {
    const {isSidebarOpen,closeSideBar} = useGlobalContext();
    
    return  <aside className={`${isSidebarOpen ? 'sidebar show-sidebar':'sidebar'} `}>
        <div className="sidebar-header">
            <button className='close-btn' onClick={closeSideBar}>
                <FaTimes/>
            </button>
        </div>
        <ul className="sidebarlist">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/signup">SignUp</a>
        </li>
        <li> <a href="/dashboard">Dashboard</a></li>
        <li> <a href="/about">About</a></li>
       
      </ul>
   
        </aside>
    
}

export default Sidebar