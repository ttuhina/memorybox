// src/App.js
import React from 'react';
import UploadForm from './components/UploadForm';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <h1 className="title">⏳ TimeCapsule</h1>
      <UploadForm />
    </div>
  );
}

export default App;
