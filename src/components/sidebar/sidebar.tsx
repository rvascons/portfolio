import React from 'react';

interface SidebarProps {
    isExpanded: boolean;
    toggleSidebar: () => void;
}


const SidebarExpanded: React.FC = () => {
    return (
        <div className="h-full w-full flex justify-center items-center">
            <h1 className="text-2xl font-bold">Rafael Vasconcelos</h1>
        </div>
    );
};

const SidebarCollapsed: React.FC = () => {
    return (
        <div className="h-full flex flex-col justify-center items-center space-y-2">
            <h1 className="text-2xl font-bold p-2">P</h1>
            <h1 className="text-2xl font-bold p-2">R</h1>
            <h1 className="text-2xl font-bold p-2">O</h1>
            <h1 className="text-2xl font-bold p-2">F</h1>
            <h1 className="text-2xl font-bold p-2">I</h1>
            <h1 className="text-2xl font-bold p-2">L</h1>
            <h1 className="text-2xl font-bold p-2">E</h1>
        </div>
    );
};

const Sidebar: React.FC<SidebarProps> = ({ isExpanded, toggleSidebar }) => {
    return (
        <div
            onClick={toggleSidebar}
            className={`flex left-0 h-screen bg-blue-500 overflow-hidden text-white transition-all duration-1000 ease-in-out shadow-lg rounded-r-lg ${isExpanded ? 'w-1/5' : 'w-1/20'
                }`}
        >
            <div className="h-full flex items-center">
                {isExpanded ? <SidebarExpanded /> : <SidebarCollapsed />}
            </div>
        </div>
    );
};

export default Sidebar;
