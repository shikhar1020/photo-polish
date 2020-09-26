import React from 'react';
import './App.css';

import Slider from './Slider';
import SidebarItems from './SidebarItems'

function App() {
  return (
    <div className="appPage">
      <div className="image" />
        <div className="sidebar">
        <SidebarItems />
        <SidebarItems />
        <SidebarItems />
        </div>      
      <Slider />
    </div>
  );
}

export default App;
