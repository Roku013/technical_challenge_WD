import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import PhonePage from './pages/PhonePage';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phones" element={<PhonePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
