import BGObjects from './BG-Objects';
import './Home-Page.css'

export function Home() {
    return (
        <div>
            <div className='sec'>
                <Section6/>
            </div>
            <div className='BGObj-1 '>
                <BGObjects />          
            </div>
        </div>
    );
} 

export const Section6 = () => {
  return (
    <div className="home-page">
      <div className="hero-wrapper">
        <section className="hero-container">
               <img src="/bg-object-sec6.png" alt="Background" className="section6-image" />
          <div className="hero-content">
            <h1 className="hero-heading">
              Start your financial journey with <span className="highlight">4epuBank</span> today!
            </h1>
            <p className="hero-subtext">
              Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus pellentesque elit.
              Pellentesque eget ut imperdiet nulla penatibus. Nascetur viverra arcu sed amet cursus purus.
            </p>
          </div>
          <button className="hero-button">Open Account</button>
    
        </section>
      </div>
    </div>
  );
};
