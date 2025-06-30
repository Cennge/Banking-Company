import BGObjects from "../BG-Objects";
import "./Home-Page.css";
import "./Section4.css";
import "./Section3.css";
import "./Section2.css";
import "./Section1.css";
import { Journey } from "../Journey-Section/Journey";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FAQ } from "../FAQ/FAQ";

export function Home() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div>
      <div className="sec" data-aos="fade-up" data-aos-delay="200">
        <Section1 />
      </div>

      <div className="sec" data-aos="fade-up" data-aos-delay="200">
        <Section2 />
      </div>

      <div className="sec" data-aos="fade-up" data-aos-delay="200">
        <FAQ />
      </div>

      <div className="sec" data-aos="fade-up" data-aos-delay="200">
        <Section3 />
      </div>

      <div className="sec" data-aos="fade-up" data-aos-delay="200">
        <Section4 />
      </div>

      <div className="sec" data-aos="fade-up" data-aos-delay="400">
        <Journey />
      </div>

      <div className="BGObj-1 ">
        <BGObjects />
      </div>
    </div>
  );
}

interface Section3Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Section3(props: Section3Props) {
  const { className = '', ...rest } = props;
  return (
    <div className={"container-section3 " + className} {...rest}>
      <div className="text-container-section3">
        <div className="heading-section3">Use Cases </div>
        <div className="paragraph-section3">
          At 4epuBank, we cater to the diverse needs of individuals and
          businesses alike, offering a wide range of financial solutions{" "}
        </div>
      </div>
      <div className="sub-container-section3">
        <div className="container2-section3">
          <div className="sub-container2-section3" data-aos="flip-right">
            <img className="abstract-design-section3" src="bg-object-sec6.png" />
            <div className="container3-section3">
              <div className="card-section3">
                <div className="icon-container-section3">
                  <div className="icon-section3">
                    <div className="icon2-section3">
                      <div className="frame-section3">
                        <img className="group-section3" src="icon1.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-section3">Managing Personal Finances </div>
              </div>
              <div className="card2-section3">
                <div className="icon-container-section3">
                  <div className="icon-section3">
                    <div className="icon2-section3">
                      <div className="frame2-section3">
                        <img className="group2-section3" src="icon2.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-section3">Saving for the Future </div>
              </div>
            </div>
            <div className="container3-section3">
              <div className="card-section3">
                <div className="icon-container-section3">
                  <div className="icon-section3">
                    <img className="icon3-section3" src="icon3.svg" />
                  </div>
                </div>
                <div className="text-section3">Homeownership </div>
              </div>
              <div className="card-section3">
                <div className="icon-container-section3">
                  <div className="icon-section3">
                    <img className="icon4-section3" src="icon4.svg" />
                  </div>
                </div>
                <div className="text-section3">Education Funding </div>
              </div>
            </div>
          </div>
          <div className="sub-container3-section3">
            <div className="text-container2-section3">
              <div className="heading2-section3">For Individuals </div>
              <div className="paragraph-section3">
                For individuals, our mortgage services pave the way to
                homeownership, and our flexible personal loans provide vital
                support during various life milestones. We also prioritize
                retirement planning, ensuring a financially secure future for
                our customers{" "}
              </div>
            </div>
            <div className="container4-section3">
              <div className="text-container3-section3">
                <div className="number-section3">78% </div>
                <div className="text2-section3">Secure Retirement Planning </div>
              </div>
              <div className="line-section3"></div>
              <div className="text-container3-section3">
                <div className="number-section3">63% </div>
                <div className="text2-section3">Manageable Debt Consolidation </div>
              </div>
              <div className="line-section3"></div>
              <div className="text-container3-section3">

                <div className="number-section3">91% </div>
                <div className="text2-section3">Reducing financial burdens </div>
              </div>
            </div>
            <div className="button-section3">
              <div className="text3-section3">Learn More </div>
            </div>
          </div>
        </div>
        <div className="container2-section3">
          <div className="sub-container3-section3">
            <div className="text-container2-section3">
              <div className="heading2-section3">For Business </div>
              <div className="paragraph-section3">
                For businesses, we empower growth with working capital solutions
                that optimize cash flow, and our tailored financing options fuel
                business expansion. Whatever your financial aspirations,
                YourBank is committed to providing the right tools and support
                to achieve them{" "}
              </div>
            </div>
            <div className="container4-section3">
              <div className="text-container3-section3">
                <div className="number-section3">65% </div>
                <div className="text2-section3">Cash Flow Management </div>
              </div>
              <div className="line-section3"></div>
              <div className="text-container3-section3">
                <div className="number-section3">70% </div>
                <div className="text2-section3">Drive Business Expansion </div>
              </div>
              <div className="line-section3"></div>
              <div className="text-container3-section3">
                <div className="number-section3">45% </div>
                <div className="text2-section3">Streamline payroll processing </div>
              </div>
            </div>
            <div className="button-section3">
              <div className="text3-section3">Learn More </div>
            </div>
          </div>
          <div className="sub-container2-section3" data-aos="flip-left">
            <img className="abstract-design2-section3" src="bg-object-sec6.png" />
            <div className="container3-section3">
              <div className="card-section3">
                <div className="icon-container-section3">
                  <div className="icon-section3">
                    <img className="icon5-section3" src="icon5.svg" />
                  </div>
                </div>
                <div className="text-section3">Startups and Entrepreneurs </div>
              </div>
              <div className="card2-section3">
                <div className="icon-container-section3">
                  <div className="icon-section3">
                    <img className="icon6-section3" src="icon6.svg" />
                  </div>
                </div>
                <div className="text-section3">Cash Flow Management </div>
              </div>
            </div>
            <div className="container3-section3">
              <div className="card-section3">
                <div className="icon-container-section3">
                  <div className="icon-section3">
                    <img className="icon7-section3" src="icon7.svg" />
                  </div>
                </div>
                <div className="text-section3">Business Expansion </div>
              </div>
              <div className="card-section3">
                <div className="icon-container-section3">
                  <div className="icon-section3">
                    <img className="icon8-section3" src="icon8.svg" />
                  </div>
                </div>
                <div className="text-section3">Payment Solutions </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export const Section2 = () => {
  const [activeTab, setActiveTab] = useState<'individuals' | 'business'>('individuals');

  const individualCards = [
    {
      title: 'Checking Accounts',
      text: 'Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.',
      icon: 'IconSec1.svg',
    },
    {
      title: 'Savings Accounts',
      text: 'Build your savings with our competitive interest rates and flexible savings account options. Whether youre saving for a specific goal or want to grow your wealth over time, we have the right account for you.',
      icon: 'IconSec2.svg',
    },
    {
      title: 'Loans and Mortgages',
      text: 'Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.',
      icon: 'IconSec3.svg',
    },
  ];

  const businessCards = [
    {
      title: 'Business Checking',
      text: 'Manage your business finances efficiently with tailored business checking solutions.',
      icon: 'IconSec6.svg',
    },
    {
      title: 'Corporate Loans',
      text: 'Empower your growth with loans designed for businesses of all sizes.',
      icon: 'IconSec5.svg',
    },
    {
      title: 'Merchant Services',
      text: 'Streamline your transactions with our powerful merchant tools.',
      icon: 'IconSec4.svg',
    },
  ];

  const currentCards = activeTab === 'individuals' ? individualCards : businessCards;

  return (
    <div className="section2-container">
      <div className="section2-heading-row">
        <h2 className="section2-heading">
          Our <span className="highlight">Products</span>
        </h2>

        <div className="section2-toggle">
          <button
            className={`section2-toggle-btn ${activeTab === 'individuals' ? 'active' : ''}`}
            onClick={() => setActiveTab('individuals')}
          >
            For Individuals
          </button>
          <button
            className={`section2-toggle-btn ${activeTab === 'business' ? 'active' : ''}`}
            onClick={() => setActiveTab('business')}
          >
            For Businesses
          </button>
        </div>
      </div>

      <p className="section2-subtext">
        Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations.
      </p>

      <div className="section2-grid">
        {currentCards.map((card, index) => (
          <div key={index} className="section2-card">
            <div className="section2-icon-wrapper">
              <img src={card.icon} alt={`${card.title} Icon`} className="section2-icon" />
            </div>
            <h3 className="section2-card-title">{card.title}</h3>
            <p className="section2-card-text">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Section4 = () => {
  type FeatureTab = 'online-banking' | 'financial-tools' | 'customer-support';
  const [activeTab, setActiveTab] = useState<FeatureTab>('online-banking');

  const features: Record<FeatureTab, { title: string; text: string; link: string }[]> = {
    'online-banking': [
      {
        title: '24/7 Account Access',
        text: 'Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.',
        link: '/account-access'
      },
      {
        title: 'Mobile Banking App',
        text: 'Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.',
        link: '/mobile-app'
      },
      {
        title: 'Secure Transactions',
        text: 'Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.',
        link: '/security'
      },
      {
        title: 'Bill Pay and Transfers',
        text: 'Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.',
        link: '/bill-pay'
      }
    ],
    'financial-tools': [
      {
        title: 'Budget Tracker',
        text: 'Monitor your spending and stay on track with our comprehensive budget tracking tools. Set goals and receive insights to improve your financial health.',
        link: '/budget-tracker'
      },
      {
        title: 'Investment Portal',
        text: 'Grow your wealth with our user-friendly investment platform. Access market data, research tools, and portfolio management features.',
        link: '/investments'
      },
      {
        title: 'Savings Calculator',
        text: 'Plan for your future with our interactive savings and loan calculators. Visualize your financial goals and create actionable plans.',
        link: '/calculator'
      },
      {
        title: 'Credit Monitoring',
        text: 'Keep track of your credit score and receive alerts about changes to your credit report. Get personalized tips to improve your creditworthiness.',
        link: '/credit-monitoring'
      }
    ],
    'customer-support': [
      {
        title: '24/7 Live Chat',
        text: 'Get instant help with our round-the-clock live chat support. Our trained representatives are ready to assist with any banking questions or concerns.',
        link: '/live-chat'
      },
      {
        title: 'Phone Support',
        text: 'Speak directly with our customer service team through our dedicated phone lines. Receive personalized assistance for complex banking needs.',
        link: '/phone-support'
      },
      {
        title: 'FAQ & Resources',
        text: 'Find quick answers to common questions in our comprehensive FAQ section. Access guides, tutorials, and helpful banking resources.',
        link: '/faq'
      },
      {
        title: 'Branch Locator',
        text: 'Find the nearest branch or ATM location with our interactive map. Get directions, hours, and contact information for in-person banking.',
        link: '/locations'
      }
    ]
  };

  const currentCards = features[activeTab] || features['online-banking'];
  const handleCardClick = (link: string) => {
    window.location.href = link;
  };

  return (
    <div className="section4-container">
      <div className="section4-header">
        <h2 className="section4-heading">
          Our <span className="highlight">Features</span>
        </h2>
        <p className="section4-subtext">
          Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience.
        </p>
      </div>

      <div className="section4-content">
        <div className="section4-nav">
          <button
            className={`section4-nav-btn ${activeTab === 'online-banking' ? 'active' : ''}`}
            onClick={() => setActiveTab('online-banking')}
          >
            Online Banking
          </button>
          <button
            className={`section4-nav-btn ${activeTab === 'financial-tools' ? 'active' : ''}`}
            onClick={() => setActiveTab('financial-tools')}
          >
            Financial Tools
          </button>
          <button
            className={`section4-nav-btn ${activeTab === 'customer-support' ? 'active' : ''}`}
            onClick={() => setActiveTab('customer-support')}
          >
            Customer Support
          </button>
        </div>

        <div className="section4-grid">
          {currentCards.map((card, index) => (
            <div
              key={index}
              className="section4-card"
              onClick={() => handleCardClick(card.link)}
            >
              <div className="section4-card-arrow">
                <img src="arrow.svg"></img>
              </div>
              <h3 className="section4-card-title">{card.title}</h3>
              <p className="section4-card-text">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const transactionsData = [
  { name: "Inna Nochevkina", amount: "-$68.00" },
  { name: "Alexander Ivanov", amount: "+$32.00" },
  { name: "Anna Brown", amount: "-$99.00" },
  { name: "John Doe", amount: "+$120.00" },
  { name: "Nine Mice", amount: "-$15.50" },
  { name: "Heaven's Raya", amount: "+$200.00" },
  { name: "Emily Clark", amount: "-$75.25" },
  { name: "Kai Angel", amount: "+$54.00" },
  { name: "Olivia White", amount: "-$120.00" },
  { name: "Code Eighty", amount: "+$80.00" },
  { name: "Code Ten", amount: "-$33.00" },
];

export const Section1 = () => {
  const [transactions, setTransactions] = useState(() => {
    const initialTransactions: { name: string; amount: string }[] = [];
    while (initialTransactions.length < 3) {
      const randomTransaction = transactionsData[Math.floor(Math.random() * transactionsData.length)];
      if (!initialTransactions.includes(randomTransaction)) {
        initialTransactions.push(randomTransaction);
      }
    }
    return initialTransactions;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTransactions(prev => {
        const randomTransaction = transactionsData[Math.floor(Math.random() * transactionsData.length)];
        const updated = [randomTransaction, ...prev].slice(0, 3);
        return updated;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section1-container">
      <div className="section1-left-content">
        <div className="section1-llc-req">
          <img src="IconLLC.png" alt="Icon" />
          <p>No LLC Required, No Credit Check.</p>
        </div>
        <div className="section1-heading">
          <h1>
            Welcome to 4epuBank
            Empowering Your <span className="highlight">Financial Journey</span>
          </h1>
        </div>
        <div className="section1-subheading">
          <p>At YourBank, our mission is to provide comprehensive banking
            solutions that empower individuals and businesses to achieve their
            financial goals. We are committed to delivering personalized and
            innovative services that prioritize our customers' needs.</p>
        </div>

        <button className="section1-button">Open Account</button>
      </div>

      <div className="section1-right-content" data-aos="flip-right" data-aos-delay="300">
        <div className="section1-right-container">
          <div className="your-transaction-container">
            <p>Your Transactions</p>
          </div>

          <div className="transactions-list" data-aos="zoom-in" data-aos-delay="500">
            {transactions.map((transaction, index) => (
              <div
                key={index}
                className={`transaction-item ${index !== 0 ? 'transaction-item-old' : ''}`}
                style={{
                  transform: `scale(${1 - index * 0.05}) translateY(${index * 60}px)`,
                  opacity: 1 - index * 0.3,
                  zIndex: transactions.length - index,
                }}
              >
                <div className="transaction-details">
                  <img src="./transaction.png" alt="transaction" />
                  <div>
                    <p>Transaction</p>
                    <span className="transaction-name">{transaction.name}</span>
                  </div>
                </div>
                <span className="transaction-amount">{transaction.amount}</span>
              </div>
            ))}
          </div>

          <div className="money-exchange-container">
            <p>Money Exchange</p>
          </div>

          <div className="section1-table-container" data-aos="zoom-out-up" data-aos-delay="700">
            <table className="exchange-table">
              <colgroup>
                <col style={{ width: "50%" }} />
                <col style={{ width: "50%" }} />
              </colgroup>
              <tbody>
                <tr>
                  <td>
                    <div className="currency-info">
                      <img src="https://flagcdn.com/w40/eu.png" alt="INR" />
                      <div>
                        <div className="currency-code">EUR</div>
                        <div className="currency-name">Euro</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="currency-info">
                      <img src="https://flagcdn.com/w40/us.png" alt="USD" />
                      <div>
                        <div className="currency-code">USD</div>
                        <div className="currency-name">Dollar</div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>100</td>
                  <td>117.22</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
