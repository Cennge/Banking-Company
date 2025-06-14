import './App.css';
import Header from './components/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home-Page';
import Footer from './components/Footer';
import Error404 from './components/404'; 

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="Header-Container">
          <Header />
        </div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Error404 />} /> 
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
