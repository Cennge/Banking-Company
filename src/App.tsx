import './App.css'
import Header from './components/header';
import BGObjects from './components/BG-Objects';

function App() {
  return (
    <div className='BodyBackground'>
      
      <div className='BGObj-1 '>
      <BGObjects />
      </div>

      <div className="Header-Container">
      <Header />
      </div>

    </div>
  );
}

export default App;
