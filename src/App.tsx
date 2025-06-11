import './App.css'
import Header from './components/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home-Page'
import Footer from './components/footer';


function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="Header-Container">
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
