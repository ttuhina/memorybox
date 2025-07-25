import React from 'react';
import './App.css';
import UploadForm from './components/UploadForm';

function App() {
  // Function to create animated letters
  const createAnimatedTitle = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="letter">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <div style={{position: 'relative', width: '100%', height: '100vh', overflow: 'hidden'}}>
      {/* Enhanced Starry night background layers */}
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      
      {/* Beautiful Moon */}
      <div className="moon"></div>
      
    
      
      {/* Ocean Waves */}
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
       
      {/* App content */}
      <div className="App">
        <h1 className="title">
          {createAnimatedTitle('⏳ TimeCapsule')}
        </h1>
        <UploadForm />
      </div>
     </div>
  );
}

export default App;