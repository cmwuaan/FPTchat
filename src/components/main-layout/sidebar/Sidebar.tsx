import React from 'react';
import Classes from './Sidebar.module.scss';
import { PiSidebarFill } from 'react-icons/pi';
import { IoCreateOutline } from 'react-icons/io5';

export const Sidebar: React.FC = () => {
  return (
    <nav className={Classes.Sidebar}>
      <div className={Classes.SidebarHeader}>
        <PiSidebarFill className={Classes.SidebarActionIcon} />
        <IoCreateOutline className={Classes.SidebarActionIcon} />
      </div>
    </nav>
  );
};
