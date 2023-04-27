import React, { useState } from 'react';

const SidebarExpanded: React.FC = () => {
    return (
        <div className=" rounded-xl h-full border-stone-800 border-4 shadow-inner shadow-slate-900" />
    );
};

const SidebarCollapsed: React.FC = () => {
    return (
        <div className=" rounded-xl h-full border-stone-800 border-4 shadow-md shadow-slate-900" />
    );
};

const Sidebar: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div
            onClick={toggleSidebar}
            className={`h-full rounded-xl bg-slate-500 transition-all duration-300 ease-linear ${isExpanded ? "w-64" : "w-14"}`}
        >
            {isExpanded ? <SidebarExpanded /> : <SidebarCollapsed />}
        </div>
    );
};

export default Sidebar;
