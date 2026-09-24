import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import { AuthProvider } from "./context/AuthContext";

import Home from "./pages/Home/Home";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
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


function App() {
  return (
    <AuthProvider>

      <BrowserRouter>

        <Routes>

          {/* HOME */}

          <Route
            path="/"
            element={<Home />}
          />
          <Route path="/how-it-works" element={<HowItWorks />} />

          <Route path="/conditions" element={<Conditions />} />
          <Route
  path="/conditions/acl-rehabilitation"
  element={<ACLRehabilitation />}
/>
<Route
  path="/conditions/knee-rehabilitation"
  element={<KneeRehabilitation />}
/>

<Route path="/conditions/back-pain" element={<BackPain />} />
<Route path="/conditions/neck-pain" element={<NeckPain />} />
<Route path="/conditions/shoulder-rehabilitation" element={<ShoulderRehabilitation />} />
<Route path="/conditions/sports-injury" element={<SportsInjury />} />
<Route path="/conditions/accident-recovery" element={<AccidentRecovery />} />
<Route path="/conditions/post-surgical-rehabilitation" element={<PostSurgicalRehabilitation />} />
<Route path="/conditions/fracture-rehabilitation" element={<FractureRehabilitation />} />
<Route path="/conditions/mobility-strength" element={<MobilityStrength />} />


<Route path="/services" element={<PhysiotherapyServices />} />

<Route
  path="/physiotherapists"
  element={<Physiotherapists />}
/>



          {/* AUTHENTICATION */}

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


          {/* PATIENT DASHBOARD */}

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