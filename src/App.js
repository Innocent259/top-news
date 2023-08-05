import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Introduction from './components/Introduction';
import Home from './components/Home';
import FullDetails from './components/FullDetails';

function App() {
  return (
    <div className="app h-100">
      <BrowserRouter>
        <Navigation />
        <Introduction />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<FullDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
