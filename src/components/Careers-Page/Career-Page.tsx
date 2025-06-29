import "aos/dist/aos.css";
import { FAQ } from "../FAQ/FAQ";
import { Journey } from "../Journey-Section/Journey";
import "./sec2career.css";
import "./sec3career.css";

export function CareerPage() {
    return (
        <div className="career-page">
                        <div className="sec" data-aos="fade-up" data-aos-delay="200">
                <Section2Career />
            </div>
            <div className="sec" data-aos="fade-up" data-aos-delay="200">
                <Section3Career />
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
        At 4epuBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.
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

export function Section3Career() {
    return (
<section className="benefits-section">
  <h2 className="benefits-heading">Our <span className="highlight">Benefits</span></h2>
  <p className="benefits-subtext">
    At 4epuBank, we value our employees and are dedicated to their well-being and success.
    We offer a comprehensive range of benefits designed to support their personal and professional growth.
  </p>

  <div className="benefits-grid">
    <div className="benefit-card">
        <div className="benefit-icon-wrapper">
      <img className="benefit-icon" src="icon1sec3.svg" />
      </div>
      <h3 className="benefit-title">Competitive Compensation</h3>
       <img className="background-benefit-card" src="backsec3ben.png" />
      <p className="benefit-description">
        We provide a competitive salary package that recognizes the skills and expertise of our employees.
        4epuBank believes in rewarding exceptional performance and offering opportunities for financial growth.
      </p>
    </div>

    <div className="benefit-card">
        <div className="benefit-icon-wrapper">
      <img className="benefit-icon" src="icon2sec3.svg" />
      </div>
      <h3 className="benefit-title">Health and Wellness</h3>
       <img className="background-benefit-card" src="backsec3ben.png" />
      <p className="benefit-description">
        We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans.
        We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.
      </p>
    </div>

    <div className="benefit-card">
        <div className="benefit-icon-wrapper">
     <img className="benefit-icon" src="icon3sec3.svg" />
     </div>
      <img className="background-benefit-card" src="backsec3ben.png" />
      <h3 className="benefit-title">Retirement Planning</h3>
      <p className="benefit-description">
        4epuBank is committed to helping employees plan for their future.
        We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.
      </p>
    </div>

    <div className="benefit-card">
        <div className="benefit-icon-wrapper">
      <img className="benefit-icon" src="icon4sec3.svg" />
      </div>
      <h3 className="benefit-title">Work-Life Balance</h3>
      <img className="background-benefit-card" src="backsec3ben.png" />
      <p className="benefit-description">
        We understand the importance of maintaining a healthy work-life balance.
        4epuBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.
      </p>
    </div>
  </div>
</section>
    );
}



