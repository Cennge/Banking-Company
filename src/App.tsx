import './App.css';
import Header from './components/Header/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home-Page/Home-Page';
import Footer from './components/Footer/Footer';
import Error404 from './components/404-Page/404'; 
import ScrollToTopButton from './components/ScrollToTop/ScrollToTop';
import { CareerPage } from './components/Careers-Page/Career-Page';

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
          <Route path="/careers" element={<CareerPage />} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
          {/* <Route path="/security" element={<SecurityPage />} /> */}
          <Route path="*" element={<Error404 />} /> 
        </Routes>

        <ScrollToTopButton />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
