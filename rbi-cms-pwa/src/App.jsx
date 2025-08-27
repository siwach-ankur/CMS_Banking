import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RBICMS from "./pages/RBICMS";
import Dashboard from "./pages/Dashboard";
import UserProfile from "./pages/UserProfile";
import ComplaintForm from "./pages/ComplaintForm";
import ComplaintSuccess from "./pages/ComplaintSuccess";
import "./App.css";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<RBICMS />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<UserProfile />} /> 
            <Route path="/complaint/new" element={<ComplaintForm />} />
          <Route path="/complaint/success" element={<ComplaintSuccess />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}
