import './App.css'
import Header from './components/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home-Page'

function App() {
  return (
    <div className='BodyBackground'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
        </Routes>

        <div className="Header-Container">
          <Header />
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
