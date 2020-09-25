import React from 'react';
import './App.css';

import Slider from './Slider';

function App() {
  return (
    <div className="appPage">
      <div className="image"> Image can be kept here! </div>
        <div className="sidebar">

        This is for Sidebar Bro!
        </div>      
      <Slider />
    </div>
  );
}

export default App;
