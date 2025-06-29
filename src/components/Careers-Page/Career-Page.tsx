import "aos/dist/aos.css";
import { FAQ } from "../FAQ/FAQ";
import { Journey } from "../Journey-Section/Journey";
import "./sec2career.css";

export function CareerPage() {
    return (
        <div className="career-page">
                        <div className="sec" data-aos="fade-up" data-aos-delay="200">
                <Section2Career />
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


export function Section2Career() {
    return (
    <section className="values-section">
      <h2 className="values-heading">
        Our <span className="highlight">Values</span>
      </h2>
      <p className="values-subtext">
        At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.
      </p>
      <div className="values-grid">
        <div className="value-card">
          <div className="value-title">Integrity</div>
          <div className="value-description">
            We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices.
          </div>
        </div>
        <div className="value-card">
          <div className="value-title">Customer Centricity</div>
          <div className="value-description">
            Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations.
          </div>
        </div>
        <div className="value-card">
          <div className="value-title">Collaboration</div>
          <div className="value-description">
            We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.
          </div>
        </div>
        <div className="value-card">
          <div className="value-title">Innovation</div>
          <div className="value-description">
            We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking.
          </div>
        </div>
      </div>
    </section>
  );
};



