import "./App.css";
import AboutSection from "./components/AboutSection/AboutSection";
import ClinicalCasesSection from "./components/ClinicalCasesSection/ClinicalCasesSection";
import CommunitySection from "./components/CommunitySection/CommunitySection";
import CTASection from "./components/CTASection/CTASection";
import ExpertsSection from "./components/ExpertsSection/ExpertsSection";
import FAQSection from "./components/FAQSection/FAQSection";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import LearnSection from "./components/LearnSection/LearnSection";
import Navbar from "./components/Navbar/Navbar";
import ResearchSection from "./components/ResearchSection/ResearchSection";
import ResourcesSection from "./components/ResourcesSection/ResourcesSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import WebinarsSection from "./components/WebinarsSection/WebinarsSection";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <main className="page-content">
        <Hero/>
        <LearnSection/>
        <CommunitySection/>
        <ClinicalCasesSection/>
        <ExpertsSection/>
        <ResearchSection/>
        <WebinarsSection/>
        <ResourcesSection/>
        <AboutSection/>
        <TestimonialsSection/>
        <FAQSection/>
        <CTASection/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;