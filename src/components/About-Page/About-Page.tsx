import "./About-Page.css"
export function AboutPage() {
    return (
        <div className="about-page">
            <Section1About/>
        </div>
    );
}


export function Section1About() {
  return (
    <section className="careersec1-container">
      <img className="careersec1-background" src="bg-object-sec6.png" />
      <div className="careersec1-image">
        <img src="backsec1.jpg" alt="Team discussion" />
      </div>
      <div className="careersec1-overlay">
        <h1 className="careersec1-top-heading">
            Welcome to 4epuBank
        </h1>
        <h1 className="careersec1-heading">
          Where Banking Meets <span className="highlight">Excellence!</span>
        </h1>
        <p className="careersec1-subtext">
At 4epuBank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence.
        </p>
      </div>
    </section>
  );
}