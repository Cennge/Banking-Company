import './App.css';
import Header from './components/Header/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home-Page/Home-Page';
import Footer from './components/Footer/Footer';
import Error404 from './components/404-Page/404'; 
import ScrollToTopButton from './components/ScrollToTop/ScrollToTop';
import { CareerPage } from './components/Careers-Page/Career-Page';
import { LoginPage } from './components/Login-Page/Login-Page';
import { SignInPage } from './components/SignIn-Page/SignIn-Page';
import { AboutPage } from './components/About-Page/About-Page';
import { SecurityPage } from './components/Security-Page/Security-Page';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
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
          <Route path="/about" element={<AboutPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="*" element={<Error404 />} /> 
        </Routes>

        <ScrollToTopButton />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
