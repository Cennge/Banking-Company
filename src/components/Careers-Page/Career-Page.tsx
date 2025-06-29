import "aos/dist/aos.css";
import { FAQ } from "../FAQ/FAQ";
import { Journey } from "../Journey-Section/Journey";

export function CareerPage() {
    return (
        <div className="career-page">
            <div className="sec" data-aos="fade-up" data-aos-delay="200">
                <FAQ />
            </div>

            <div className="sec" data-aos="fade-up" data-aos-delay="200">
                <Journey />
            </div>
        </div>
    );
}