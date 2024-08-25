// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.scss';
import './App.scss';
import Main from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';

function App() {
  // const [json, setJson] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/videos/:id" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
