import React, { useState } from 'react';
import Header from './components/Header';
import MainHeadbyte from './components/MainHeadbyte';
import MainDreadTides from './components/MainDreadTides';

function App() {
  const [viewToDisplay, setViewToDisplay] = useState(<MainHeadbyte />);

  function selectMainDisplay (selectedView) {
    switch(selectedView) {
      case 0: 
        setViewToDisplay(<MainHeadbyte />)
        break;
      case 1: 
        setViewToDisplay(<MainDreadTides />)
        break;
      default:
        // do nothing
    }
  }

  return (
    <div className="App">
      <Header navigation={e=>selectMainDisplay(e)}/>
      {viewToDisplay}
    </div>
  );
}

export default App;
