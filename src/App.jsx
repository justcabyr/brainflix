import { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.scss'
import './App.scss';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

function App() {
  const [json, setJson] = useState(0);

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
