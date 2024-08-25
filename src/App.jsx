// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.scss';
import './App.scss';
// import HomePage from './components/HomePage/HomePage';
import Main from './components/Main/Main';

function App() {
  // const [json, setJson] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cat" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
