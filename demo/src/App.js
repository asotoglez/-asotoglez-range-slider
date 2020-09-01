import React from 'react';
import './App.css';
import RangeSlider from '@asotoglez/range-slider'

function App() {
  return (
    <div className="App">
      <RangeSlider width='20%' max={100} defaultValue={50}/>
      <RangeSlider width='20%' max={100} defaultValue={0}/>
      <RangeSlider width='20%' max={100} defaultValue={100}/>
    </div>
  );
}

export default App;
