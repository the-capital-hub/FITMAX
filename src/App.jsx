import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import AuthContext, { AuthProvider } from "./context/AuthContext";

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

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import StorySection from "./components/StorySection/StorySection";
import BodyExplorer from "./components/BodyExplorer/BodyExplorer";
import FitmaxJourney from "./components/FitmaxJourney/FitmaxJourney";

function Home() {
  return (
    <div className="app">
      <Navbar />

      <main className="page-content">
        <Hero />
        <StorySection/>
        <BodyExplorer/>
        {/* <FitmaxJourney/> */}
        <LearnSection />
        
        <CommunitySection />
        <ClinicalCasesSection />
        <ExpertsSection />
        <ResearchSection />
        <WebinarsSection />
        <ResourcesSection />
        <AboutSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
