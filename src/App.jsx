import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext"; // Import AuthProvider
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import BookingPage from "./pages/BookingPage";
import ContactPage from "./pages/ContactPage";
import LoginModal from "./pages/LoginModal";
import TrainSearchResults from "./pages/TrainSearchResults";
import TrainCarousel from "./Components/TrainCarousel";
import ProtectedRoute from "./Components/ProtectedRoute";
import styles from "./Styles/App.module.css";

// Component to conditionally render content based on route
const RouteContentManager = () => {
  const location = useLocation();
  
  return (
    <div className={styles.mainContent}>
      {location.pathname === "/" && (
        <>
          <Home />
          <TrainCarousel />
        </>
      )}
      <Routes>
        <Route path="/" element={null} />
        <Route path="/train-search" element={<TrainSearchResults />} />
        <Route 
          path="/booking" 
          element={
            <ProtectedRoute>
              <BookingPage />
            </ProtectedRoute>
          } 
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route 
          path="/login" 
          element={
            <LoginModal 
              isOpen={true} 
              onClose={() => window.history.back()} 
              onLogin={() => {}} 
              switchToRegister={() => {}} 
            />
          } 
        />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <AuthProvider> {/* Wrap the entire app with AuthProvider */}
      <Router>
        <div className={styles.app}>
          <Navbar />
          <RouteContentManager />
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;