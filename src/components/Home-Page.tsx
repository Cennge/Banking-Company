import BGObjects from "./BG-Objects";
import "./Home-Page.css";
import { Journey } from "./Journey";
import { FaPiggyBank, FaChartLine, FaHome, FaGraduationCap, FaBuilding, FaMoneyBillWave, FaRocket, FaWallet } from 'react-icons/fa';

export function Home() {
  return (
    <div>
      <div className="sec">
        <Journey />
      </div>

      <div className="sec">
        <Section3 />
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
          <div className="sub-container2-section3">
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
          <div className="sub-container2-section3">
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
