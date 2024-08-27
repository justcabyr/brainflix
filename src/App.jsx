import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.scss';
import './App.scss';
import Main from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';
import Upload from './components/Upload/Upload';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/videos/:id" element={<Main />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
