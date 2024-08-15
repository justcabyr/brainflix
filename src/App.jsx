import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import jsonData from './assets/data/video-details.json';

function App() {
  const [json, setJson] = useState(0);

  return (
    <>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <BrowserRouter>
        <Routes>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
