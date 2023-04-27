import React from 'react';

interface ContentProps {
    isExpanded: boolean;
}

const Content: React.FC<ContentProps> = ({ isExpanded }) => {
    return (
        <div
            className={`flex-1 h-screen transition-all duration-500 ease-in-out ${isExpanded ? 'w-4/5' : 'w-19/20'
                }`}
        >
            <div className="h-full flex items-center justify-center">
                <h1 className="text-3xl font-bold">Content</h1>
            </div>
        </div>
    );
};

export default Content;
