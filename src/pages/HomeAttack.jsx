import { Helmet } from "react-helmet-async";
import Hero from "../components/AttackComponents/Hero";
import AboutSection from "../components/AttackComponents/AboutSection";
import Why from "../components/AttackComponents/Why";
import PartnerForm from "../components/AttackComponents/PartnerForm";
import Services from "../components/AttackComponents/Services";
import Financials from '../components/AttackComponents/Financials';
import ReadyForHunt from '../components/AttackComponents/ReadyForHunt';
import Testimonials from '../components/AttackComponents/Testimonials'

export default function HomeAttack() {
    return (
        <div className="bg-black text-white">
            <Helmet>
                <title>Grow Your Business Online with a Leading Marketing Agency | Growthshark</title>
                <meta name="description" content="Looking to grow your business online? GrowthShark provides expert marketing services that boost engagement, generate leads, and increase sales. Get your free consultation today!" />
            </Helmet>
          
            <Hero />
            <AboutSection />
            <Why />
            <PartnerForm/>
            <Services/>
            <Financials/>
            <ReadyForHunt/>
            <Testimonials />
          
        </div>
    );
}
