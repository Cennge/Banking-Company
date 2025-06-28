import { useState } from 'react';
import './FAQ.css';

export const FAQ = () => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">
        <span className="highlight">Frequently</span> Asked Questions
      </h2>
      <p className="faq-subtitle">
        Still you have any questions? Contact our Team via{' '}
        <a href="mailto:support@4epuBank.com">support@4epuBank.com</a>
      </p>

      <div className={`faq-grid ${showAll ? 'expanded' : ''}`}>
        <div className="faq-card">
          <h3>How do I open an account with 4epuBank?</h3>
             <div className="faq-undrelined"></div>
          <p>Opening an account with 4epuBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.</p>
        </div>
        <div className="faq-card">
          <h3>What documents do I need to provide to apply for a loan?</h3>
             <div className="faq-undrelined"></div>
          <p>The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.</p>
        </div>
        <div className="faq-card">
          <h3>How can I access my accounts online?</h3>
             <div className="faq-undrelined"></div>
          <div className="faq-card-content">
            <p>Accessing your accounts online is simple and secure. Visit our website and click on the “Login” button. Enter your username and password to access your accounts. If you haven’t registered for online banking, click on the “Enroll Now” button and follow the registration process. If you need assistance, our customer support team is available to guide you.</p>
          </div>
        </div>
        <div className="faq-card">
          <h3>Are my transactions and personal information secure?</h3>
             <div className="faq-undrelined"></div>
          <div className="faq-card-content">
            <p>At 4epuBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.</p>
          </div>
        </div>

        <div className={`faq-card ${showAll ? '' : 'hidden'}`}>
          <h3>Can I set up automatic bill payments?</h3>
             <div className="faq-undrelined"></div>
          <p>At 4epuBank, your privacy and transaction security are paramount. We implement state-of-the-art encryption technology alongside multi-factor authentication to protect your data at every step. Our security systems are constantly monitored and updated to defend against the latest threats. With us, you can manage your finances confidently and securely.</p>
        </div>
        <div className={`faq-card ${showAll ? '' : 'hidden'}`}>
        
          <h3>What should I do if I forget my online banking password?</h3>
          <div className="faq-undrelined"></div>
          <p>At 4epuBank, safeguarding your transactions and personal data is our top priority. We utilize cutting-edge encryption and multi-factor authentication to ensure your information remains secure. Additionally, we continuously enhance our security protocols to stay ahead of evolving threats. You can trust us to keep your finances well protected.</p>
        </div>
      </div>

      <button className="faq-button" onClick={handleToggle}>
        {showAll ? 'Hide Extra FAQ\'s' : 'Load All FAQ\'s'}
      </button>
    </section>
  );
};
