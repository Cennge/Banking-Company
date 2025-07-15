import "./About-Page.css"
import "aos/dist/aos.css";
import "./sec1about.css";
import { FAQ } from "../FAQ/FAQ";
import { Journey } from "../Journey-Section/Journey";

export function AboutPage() {
    return (
        <div className="about-page">
            <div className="sec" data-aos="fade-up" data-aos-delay="200">
                <About1Career />
            </div>

            <div className="sec" data-aos="fade-up" data-aos-delay="200">
                <FAQ />
            </div>

            <div className="sec" data-aos="fade-up" data-aos-delay="200">
                <Journey />
            </div>
        </div>
    );
}

export function About1Career() {
    return (
        <section className="aboutsec1-container">
            <img className="aboutsec1-background" src="bg-object-sec6.png" />
            <div className="aboutsec1-image" data-aos="zoom-out-up">
                <img src="backsec1.jpg" alt="Team discussion" />
            </div>
            <div className="aboutsec1-overlay" data-aos="zoom-in-right">
                <h1 className="aboutsec1-heading">
                    Where Banking Meets <span className="highlight">Excellence!</span>
                </h1>
                <p className="aboutsec1-subtext">
                    At YourBank, we believe that banking should be more than just transactions.
                    It should be an experience that empowers individuals and businesses to
                    thrive and reach their financial goals. As a trusted financial institution,
                    we are committed to delivering exceptional banking services that go beyond
                    expectations. With a focus on innovation, personalized solutions, and unwavering
                    integrity, we strive to provide the best banking experience for our valued customers
                </p>
            </div>
        </section>
    );
}