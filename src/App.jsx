import { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Main from './components/Main/Main';

function App() {
  const [json, setJson] = useState(0);

  return (
    <>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <Main />
    </>
  );
}

export default App;
