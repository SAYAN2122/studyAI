import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import DashboardPreview from "../components/landing/DashboardPreview";
import WhyChooseUs from "../components/landing/WhyChooseUs";
import FAQ from "../components/landing/FAQ";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

function Landing() {
  return (
    <div className="bg-slate-950">

      <Navbar />

      <Hero />

      <Features />

      <HowItWorks />
<DashboardPreview />
<WhyChooseUs />
<FAQ />

<CTA />
<Footer />

    </div>
  );
}

export default Landing;