import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import { AuthProvider } from "./context/AuthContext";

import Home from "./pages/Home/Home";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Dashboard from "./pages/Dashboard/Dashboard";


// =========================
// PUBLIC PAGES
// =========================

import HowItWorks from "./pages/HowItWorks/HowItWorks";
import Conditions from "./pages/Conditions/Conditions";

import ACLRehabilitation from "./pages/Conditions/ACLRehabilitation/ACLRehabilitation";
import KneeRehabilitation from "./pages/Conditions/knee-rehabilitation/KneeRehabilitation";

import BackPain from "./pages/Conditions/BackPain/BackPain";
import NeckPain from "./pages/Conditions/NeckPain/NeckPain";
import ShoulderRehabilitation from "./pages/Conditions/ShoulderRehabilitation/ShoulderRehabilitation";
import SportsInjury from "./pages/Conditions/SportsInjury/SportsInjury";
import AccidentRecovery from "./pages/Conditions/AccidentRecovery/AccidentRecovery";
import PostSurgicalRehabilitation from "./pages/Conditions/PostSurgicalRehabilitation/PostSurgicalRehabilitation";
import FractureRehabilitation from "./pages/Conditions/FractureRehabilitation/FractureRehabilitation";
import MobilityStrength from "./pages/Conditions/MobilityStrength/MobilityStrength";

import PhysiotherapyServices from "./pages/PhysiotherapyServices/PhysiotherapyServices";
import Physiotherapists from "./pages/Physiotherapists/Physiotherapists";
import PatientStories from "./pages/PatientStories/PatientStories";
import Pricing from "./pages/Pricing/Pricing";
import FAQs from "./pages/FAQs/FAQs";
import AboutFitmax from "./pages/AboutFitmax/AboutFitmax";
import Contact from "./pages/Contact/Contact";


// =========================
// BOOKING FLOW
// =========================

import BookAssessment from "./pages/BookAssessment/BookAssessment";
import PatientIntake from "./pages/PatientIntake/PatientIntake";
import ConsultationBooking from "./pages/ConsultationBooking/ConsultationBooking";
import Payment from "./pages/Payment/Payment";
import BookingConfirmation from "./pages/BookingConfirmation/BookingConfirmation";


// =========================
// PHYSIO PORTAL
// =========================

import PhysioDashboard from "./pages/PhysioDashboard/PhysioDashboard";
import Patients from "./pages/Patients/Patients";
import PatientDetail from "./pages/PatientDetail/PatientDetail";
import Assessment from "./pages/Assessment/Assessment";
import RehabPlans from "./pages/RehabPlans/RehabPlans";
import Exercises from "./pages/Exercises/Exercises";
import Consultations from "./pages/Consultations/Consultations";
import Progress from "./pages/Progress/Progress";
import Profile from "./pages/Profile/Profile";


// =========================
// ADMIN PORTAL
// =========================

import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import AdminPatients from "./pages/Patients/Patients";
import AdminPhysiotherapists from "./pages/Physiotherapists/Physiotherapists";
import Appointments from "./pages/Appointments/Appointments";
import Payments from "./pages/Payments/Payments";
import ExerciseLibrary from "./pages/ExerciseLibrary/ExerciseLibrary";
import ReportsAnalytics from "./pages/ReportsAnalytics/ReportsAnalytics";
import AdminSettings from "./pages/AdminSettings/AdminSettings";


function App() {
  return (
    <AuthProvider>

      <BrowserRouter>

        <Routes>

          {/* =========================
              HOME
          ========================= */}

          <Route
            path="/"
            element={<Home />}
          />


          {/* =========================
              PUBLIC PAGES
          ========================= */}

          <Route
            path="/how-it-works"
            element={<HowItWorks />}
          />

          <Route
            path="/conditions"
            element={<Conditions />}
          />

          <Route
            path="/conditions/acl-rehabilitation"
            element={<ACLRehabilitation />}
          />

          <Route
            path="/conditions/knee-rehabilitation"
            element={<KneeRehabilitation />}
          />

          <Route
            path="/conditions/back-pain"
            element={<BackPain />}
          />

          <Route
            path="/conditions/neck-pain"
            element={<NeckPain />}
          />

          <Route
            path="/conditions/shoulder-rehabilitation"
            element={<ShoulderRehabilitation />}
          />

          <Route
            path="/conditions/sports-injury"
            element={<SportsInjury />}
          />

          <Route
            path="/conditions/accident-recovery"
            element={<AccidentRecovery />}
          />

          <Route
            path="/conditions/post-surgical-rehabilitation"
            element={<PostSurgicalRehabilitation />}
          />

          <Route
            path="/conditions/fracture-rehabilitation"
            element={<FractureRehabilitation />}
          />

          <Route
            path="/conditions/mobility-strength"
            element={<MobilityStrength />}
          />

          <Route
            path="/services"
            element={<PhysiotherapyServices />}
          />

          <Route
            path="/physiotherapists"
            element={<Physiotherapists />}
          />

          <Route
            path="/patient-stories"
            element={<PatientStories />}
          />

          <Route
            path="/pricing"
            element={<Pricing />}
          />

          <Route
            path="/faqs"
            element={<FAQs />}
          />

          <Route
            path="/about"
            element={<AboutFitmax />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />


          {/* =========================
              BOOKING FLOW
          ========================= */}

          <Route
            path="/book-assessment"
            element={<BookAssessment />}
          />

          <Route
            path="/patient-intake"
            element={<PatientIntake />}
          />

          <Route
            path="/consultation-booking"
            element={<ConsultationBooking />}
          />

          <Route
            path="/payment"
            element={<Payment />}
          />

          <Route
            path="/booking-confirmation"
            element={<BookingConfirmation />}
          />


          {/* =========================
              PHYSIO PORTAL
          ========================= */}

          <Route
            path="/physio"
            element={<PhysioDashboard />}
          />

          <Route
            path="/physio/patients"
            element={<Patients />}
          />

          <Route
            path="/physio/patient"
            element={<PatientDetail />}
          />

          <Route
            path="/physio/assessment"
            element={<Assessment />}
          />

          <Route
            path="/physio/rehab-plans"
            element={<RehabPlans />}
          />

          <Route
            path="/physio/exercises"
            element={<Exercises />}
          />

          <Route
            path="/physio/consultations"
            element={<Consultations />}
          />

          <Route
            path="/physio/progress"
            element={<Progress />}
          />

          <Route
            path="/physio/profile"
            element={<Profile />}
          />


          {/* =========================
              ADMIN PORTAL
          ========================= */}

          <Route
            path="/admin"
            element={<AdminDashboard />}
          />

          <Route
            path="/admin/patients"
            element={<AdminPatients />}
          />

          <Route
            path="/admin/physiotherapists"
            element={<AdminPhysiotherapists />}
          />

          <Route
            path="/admin/appointments"
            element={<Appointments />}
          />

          <Route
            path="/admin/payments"
            element={<Payments />}
          />

          <Route
            path="/admin/exercises"
            element={<ExerciseLibrary />}
          />

          <Route
            path="/admin/reports"
            element={<ReportsAnalytics />}
          />

          <Route
            path="/admin/settings"
            element={<AdminSettings />}
          />
          <Route
  path="/admin/patients"
  element={<AdminPatients />}
/>


          {/* =========================
              AUTHENTICATION
          ========================= */}

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/forgot-password"
            element={<ForgotPassword />}
          />


          {/* =========================
              PATIENT DASHBOARD
          ========================= */}

          <Route element={<ProtectedRoute />}>

            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

          </Route>

        </Routes>

      </BrowserRouter>

    </AuthProvider>
  );
}

export default App;