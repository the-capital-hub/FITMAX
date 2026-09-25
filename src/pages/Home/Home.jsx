import "../fitmax-premium.css";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import StorySection from "../../components/StorySection/StorySection";
import BodyExplorer from "../../components/BodyExplorer/BodyExplorer";
import HowFitMaxWorks from "../../components/HowFitMaxWorks/HowFitMaxWorks";
import WhyOnlinePhysiotherapy from "../../components/WhyOnlinePhysiotherapy/WhyOnlinePhysiotherapy";
import TrustSection from "../../components/TrustSection/TrustSection";
import PatientStories from "../../components/PatientStories/PatientStories";
import FAQSection from "../../components/FAQSection/FAQSection";
import CTASection from "../../components/CTASection/CTASection";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div className="app">

      <Navbar />

      <main className="page-content">

        <Hero />

        <StorySection />

        <BodyExplorer />

        <HowFitMaxWorks />

        <WhyOnlinePhysiotherapy />

        <TrustSection />

        <PatientStories />

        <FAQSection />

        <CTASection />

      </main>

      <Footer />

    </div>
  );
}

export default Home;