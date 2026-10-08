import { Helmet, HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import HomeStealth from "./pages/HomeStealth";
import HomeAttack from "./pages/HomeAttack";
import About from "./pages/AboutUs";
import Contact from "./pages/ContactUs";
import Career from "./pages/Career";
import Portfolio from "./pages/Portfolio";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import CampaignLawFirms from "./pages/CampaignLawFirms";
import CampaignPlumbers from "./pages/CampaignPlumbers";
import CampaignRoofers from "./pages/CampaignRoofers";
import CampaignDental from "./pages/CampaignDental";

// Portfolio Case Pages
import Smm1 from "./pages/portfolio/Smm1";
import Smm2 from "./pages/portfolio/Smm2";
import PMS from "./pages/portfolio/PMS";
import OCS from "./pages/portfolio/OCS";
import CB2B from "./pages/portfolio/CB2B";

// Services
// import Automation from "./pages/services/Automation";
import B2B from "./pages/services/B2B";
import Blog from "./pages/services/Blog";
// import CommunityEngagement from "./pages/services/CommunityEngagement";
import CommunityManagement from "./pages/services/CommunityManagement";
import ContentCreation from "./pages/services/ContentCreation";
import CopyWriting from "./pages/services/CopyWriting";
import Ecommerce from "./pages/services/Ecommerce";
// import EmailCampaigns from "./pages/services/EmailCampaigns";
import EmailMarketing from "./pages/services/EmailMarketing";
import FacebookMarketing from "./pages/services/FacebookMarketing";
// import Feedback from "./pages/services/Feedback";
import InstaMarketing from "./pages/services/InstaMarketing";
// import OnlineEngagement from "./pages/services/OnlineEngagement";
import SocialListening from "./pages/services/SocialListening";
import VideoContent from "./pages/services/VideoContent";

// admin
import Admin from "./pages/Admin.jsx";
import AdminLogin from "./pages/adminAuth/AdminLogin.jsx";
import AdminRegister from "./pages/adminAuth/AdminRegister.jsx";
import AdminProtectedRoute from "./pages/adminAuth/AdminProtectedRoute.jsx";


// Canonical Helmet
function CanonicalHelmet() {
  const location = useLocation();
  const baseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:5173";
  const canonicalUrl = `${baseUrl}${location.pathname.replace(/\/$/, "")}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
}

function AppContent() {
  const [isStealth, setIsStealth] = useState(false);
  const location = useLocation();
  const isCampaignPage = location.pathname.startsWith("/lawers");

  const toggleMode = () => {
    console.log("Toggling mode, isStealth before:", isStealth);
    setIsStealth((prev) => {
      console.log("isStealth after:", !prev);
      return !prev;
    });
  };

  return (
    <>
      <CanonicalHelmet />
      <ScrollToTop />

      <Navbar
        toggleMode={toggleMode}
        isStealth={isStealth}
      />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={isStealth ? <HomeStealth /> : <HomeAttack />}
        />

        <Route path="/attack" element={<HomeAttack />} />
        <Route path="/stealth" element={<HomeStealth />} />

        {/* Main Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/portfolio" element={<Portfolio />} />

        {/* Campaign Pages */}
        <Route path="/lawyer" element={<CampaignLawFirms />} />
        <Route path="/plumber" element={<CampaignPlumbers />} />
        <Route path="/roofer" element={<CampaignRoofers />} />
        <Route path="/dental" element={<CampaignDental />} />

        {/* Portfolio Cases */}
        <Route path="/portfolio/smm1" element={<Smm1 />} />
        <Route path="/portfolio/smm2" element={<Smm2 />} />
        <Route path="/portfolio/pms" element={<PMS />} />
        <Route path="/portfolio/ocs" element={<OCS />} />
        <Route path="/portfolio/cb2b" element={<CB2B />} />

        {/* Services */}
        {/* <Route path="/services/automation" element={<Automation />} /> */}

        <Route
          path="/services/b2b-seo-service"
          element={<B2B />}
        />

        <Route
          path="/services/blog-writing-service"
          element={<Blog />}
        />

        {/* <Route
        path="/services/community-engagement"
        element={<CommunityEngagement />}
      /> */}

        <Route
          path="/services/community-management"
          element={<CommunityManagement />}
        />

        <Route
          path="/services/content-creation-services"
          element={<ContentCreation />}
        />

        <Route
          path="/services/copywriting-services"
          element={<CopyWriting />}
        />

        <Route
          path="/services/ecommerce-seo-services"
          element={<Ecommerce />}
        />

        {/* <Route
        path="/services/email-campaign"
        element={<EmailCampaigns />}
      /> */}

        <Route
          path="/services/email-marketing-services"
          element={<EmailMarketing />}
        />

        <Route
          path="/services/facebook-marketing"
          element={<FacebookMarketing />}
        />

        {/* <Route
        path="/services/feedback"
        element={<Feedback />}
      /> */}

        <Route
          path="/services/insta-marketing"
          element={<InstaMarketing />}
        />

        {/* <Route
        path="/services/online-engagement"
        element={<OnlineEngagement />}
      /> */}

        <Route
          path="/services/social-listening"
          element={<SocialListening />}
        />

        <Route
          path="/services/video-editing-service"
          element={<VideoContent />}
        />

        {/* Blog */}
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

        {/* <Route path="/admin" element={<Admin />} /> */}
      </Routes>

      <Footer />
    </>
  );
}


function AppRouter() {
  const location = useLocation();

  const isAdmin = location.pathname.startsWith("/admin");

  if (location.pathname === "/admin/login") {
    return <AdminLogin />
  }

  if (location.pathname === "/admin/register") {
    return <AdminRegister />
  }

  if (location.pathname === "/admin") {
    return (
      <AdminProtectedRoute>
        <Admin />
      </AdminProtectedRoute>
    )
  }

  return isAdmin ? <Admin /> : <AppContent />;
}

export default function App() {
  const isAdmin = window.location.pathname === "/admin";

  return (
    <HelmetProvider>
      <Router>
        <AppRouter />
      </Router>
    </HelmetProvider>
  );
}