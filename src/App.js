import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./pages/homepage";
import ContactPage from "./pages/contact";
import SignUpPage from "./pages/signup";
import { useDispatch } from "react-redux";
import { AriaCurrent } from "./redux/actions/landing_actions";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const pathSegments = location.pathname.split('/');
    const currentRoute = pathSegments[pathSegments.length - 1];
    dispatch(AriaCurrent(currentRoute));
    console.log(currentRoute)
  }, [location.pathname, dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/register" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
