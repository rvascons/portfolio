// App.js
import React, { useState } from 'react';
import Sidebar from './components/sidebar/sidebar';
import Content from './components/contents/contents';

const App: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="h-screen flex">
      <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
      <Content isExpanded={isExpanded} />
    </div>
  );
};

export default App;
