import { FAQ } from "../FAQ/FAQ";
import { Journey } from "../Journey-Section/Journey";
import "./sec2career.css";
import "./sec3career.css";
import "./sec1career.css";
import "./sec4career.css";


export function CareerPage() {
  return (
    <div className="career-page">
      <div className="sec" data-aos="fade-up" data-aos-delay="200">
        <Section1Career />
      </div>

      <div className="sec" data-aos="fade-up" data-aos-delay="200">
        <Section2Career />
      </div>

      <div className="sec" data-aos="fade-up" data-aos-delay="200">
        <Section3Career />
      </div>

      <div className="sec" data-aos="fade-up" data-aos-delay="200">
        <Section4Career />
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
        At 4epuBank, our values form the foundation of our organization and
        guide our actions. We believe in upholding the highest standards of
        integrity, delivering exceptional service, and embracing innovation.
        These values define our culture and shape the way we work together to
        achieve our goals.
      </p>
      <div className="values-grid">
        <div className="value-card">
          <div className="value-title">Integrity</div>
          <div className="value-description">
            We conduct ourselves with utmost honesty, transparency, and ethical
            behavior. We believe in doing what is right for our customers,
            colleagues, and stakeholders, even when faced with difficult
            choices.
          </div>
        </div>
        <div className="value-card">
          <div className="value-title">Customer Centricity</div>
          <div className="value-description">
            Our customers are at the heart of everything we do. We are dedicated
            to understanding their needs, providing personalized solutions, and
            delivering exceptional service that exceeds expectations.
          </div>
        </div>
        <div className="value-card">
          <div className="value-title">Collaboration</div>
          <div className="value-description">
            We foster a collaborative and inclusive work environment, where
            teamwork and diversity are celebrated. By leveraging the unique
            strengths and perspectives of our employees, we drive innovation and
            achieve greater success together.
          </div>
        </div>
        <div className="value-card">
          <div className="value-title">Innovation</div>
          <div className="value-description">
            We embrace change and constantly seek innovative solutions to meet
            the evolving needs of our customers. We encourage our employees to
            think creatively, challenge conventions, and explore new ideas to
            drive the future of banking.
          </div>
        </div>
      </div>
    </section>
  );
}

export function Section3Career() {
  return (
    <section className="benefits-section">
      <h2 className="benefits-heading">
        Our <span className="highlight">Benefits</span>
      </h2>
      <p className="benefits-subtext">
        At 4epuBank, we value our employees and are dedicated to their
        well-being and success. We offer a comprehensive range of benefits
        designed to support their personal and professional growth.
      </p>

      <div className="benefits-grid">
        <div className="benefit-card">
          <div className="benefit-title-wrapper">
            <div className="benefit-icon-wrapper">
              <img className="benefit-icon" src="icon1sec3.svg" />
            </div>
            <h3 className="benefit-title">Competitive Compensation</h3>
          </div>
          <img className="background-benefit-card" src="backsec3ben.png" />
          <p className="benefit-description">
            We provide a competitive salary package that recognizes the skills
            and expertise of our employees. 4epuBank believes in rewarding
            exceptional performance and offering opportunities for financial
            growth.
          </p>
        </div>

        <div className="benefit-card">
          <div className="benefit-title-wrapper">
            <div className="benefit-icon-wrapper">
              <img className="benefit-icon" src="icon2sec3.svg" />
            </div>
            <h3 className="benefit-title">Health and Wellness</h3>
          </div>
          <img className="background-benefit-card" src="backsec3ben.png" />
          <p className="benefit-description">
            We prioritize the health and well-being of our employees by
            providing comprehensive medical, dental, and vision insurance plans.
            We also offer wellness programs, gym memberships, and resources to
            support a healthy lifestyle.
          </p>
        </div>

        <div className="benefit-card">
          <div className="benefit-title-wrapper">
            <div className="benefit-icon-wrapper">
              <img className="benefit-icon" src="icon3sec3.svg" />
            </div>
            <img className="background-benefit-card" src="backsec3ben.png" />
            <h3 className="benefit-title">Retirement Planning</h3>
          </div>
          <p className="benefit-description">
            YourBank is committed to helping employees plan for their future. We
            offer a retirement savings plan with a generous employer match to
            help them build a secure financial foundation for the long term.
          </p>
        </div>

        <div className="benefit-card">
          <div className="benefit-title-wrapper">
            <div className="benefit-icon-wrapper">
              <img className="benefit-icon" src="icon4sec3.svg" />
            </div>
            <h3 className="benefit-title">Work-Life Balance</h3>
          </div>
          <img className="background-benefit-card" src="backsec3ben.png" />
          <p className="benefit-description">
            We understand the importance of maintaining a healthy work-life
            balance. 4epuBank offers flexible work arrangements, paid time off,
            parental leave, and other programs that support employees in
            managing their personal and professional commitments.
          </p>
        </div>
      </div>
    </section>
  );
}


export function Section1Career() {
  return (
    <section className="careersec1-container">
      <img className="careersec1-background" src="bg-object-sec6.png" />
      <div className="careersec1-image" data-aos="zoom-out-up">
        <img src="backsec1.jpg" alt="Team discussion" />
      </div>
      <div className="careersec1-overlay" data-aos="zoom-in-right">
        <h1 className="careersec1-heading">
          Welcome to <span className="highlight">4epuBank</span> Careers!
        </h1>
        <p className="careersec1-subtext">
          Join our team and embark on a rewarding journey in the banking
          industry. At 4epuBank, we are committed to fostering a culture of
          excellence and providing opportunities for professional growth. With a
          focus on innovation, and integrity, we strive to
          make a positive impact in the lives of our customers and communities.
          Join us today and be a part of our mission to shape the future of
          banking.
        </p>
      </div>
    </section>
  );
}


export function Section4Career() {
  const jobs = [
    {
      title: 'Relationship Manager',
      location: 'Location: India',
      department: 'Department: Retail Banking',
      description:
        'As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills, a strong sales acumen, and a passion for delivering exceptional customer service.',
      requirements: [
        "Bachelor's degree in Business, Finance, or a related field",
        'Minimum of 5 years of experience in sales or relationship management in the banking industry',
        'Proven track record of meeting and exceeding sales targets',
        'Excellent interpersonal and negotiation skills',
        'Strong knowledge of banking products and services',
      ],
    },
    {
      title: 'Risk Analyst',
      location: 'Location: India',
      department: 'Department: Risk Management',
      description:
        'As a Risk Analyst at YourBank, you will play a vital role in identifying and assessing potential risks to our organization. You will analyze data, conduct risk assessments, and develop strategies to mitigate risks. We are looking for detail-oriented individuals with strong analytical skills and a solid understanding of risk management principles.',
      requirements: [
        "Bachelor's degree in Finance, Economics, or a related field",
        'Minimum of 2 years of experience in risk management or a similar role',
        'Proficiency in risk analysis tools and techniques',
        'Strong analytical and problem-solving skills',
        'Knowledge of regulatory requirements and industry best practices',
      ],
    },
    {
      title: 'IT Security Specialist',
      location: 'Location: India',
      department: 'Department: Information Technology',
      description:
        'As an IT Security Specialist at YourBank, you will be responsible for ensuring the security and integrity of our information systems. You will develop and implement security protocols, conduct vulnerability assessments, and respond to security incidents. We are seeking individuals with a strong technical background, knowledge of cybersecurity best practices, and a commitment to maintaining the confidentiality of customer data.',
      requirements: [
        "Bachelor's degree in Computer Science, Information Security, or a related field",
        'Minimum of 5 years of experience in IT security or a similar role',
        'In-depth knowledge of network security protocols and technologies',
        'Familiarity with regulatory frameworks such as PCI DSS and GDPR',
        'Professional certifications such as CISSP or CISM are preferred',
      ],
    },
  ];

  return (
    <div className="section4career-container">
      <div className="section4career-header">
        <h2 className="section4career-heading">
          Job <span className="highlight">Openings</span>
        </h2>
        <p className="section4career-subtext">
          Explore exciting job openings at YourBank, where we value talent,
          innovation, and a passion for customer service. Join our team and be
          part of shaping a brighter future in the banking industry.
        </p>
      </div>

      <div className="section4career-grid">
        {jobs.map((job, index) => (
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1400" key={index} className="section4career-card">
            <h3 className="section4career-title">{job.title}</h3>

            <div className="section4career-tags">
              <span className="section4career-tag">{job.location}</span>
              <span className="section4career-tag">{job.department}</span>
            </div>

            <div className="section4career-content">
              <h4 className="section4career-subheading">About This Job</h4>
              <p className="section4career-description">{job.description}</p>

              <div className="section4career-requirements">
                <h4 className="section4career-req-heading">
                  Requirements & Qualifications
                </h4>
                <ul>
                  {job.requirements.map((requirement, reqIndex) => (
                    <li key={reqIndex}>
                      <div className="requirement-line">
                        <div className="requirement-icon" />
                        <span>{requirement}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a href="#" className="section4career-btn">Apply Now</a>
          </div>
        ))}
      </div>
    </div>
  );
}


