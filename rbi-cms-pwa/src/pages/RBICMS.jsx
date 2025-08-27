import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { color, motion } from "framer-motion";
import { Button } from "../components/ui/button";
import "../styles/RBICMS.css";

// Cards
import QuickTile from "../components/QuickTile";
import ArticleCard from "../components/ArticleCard";
import VideoCard from "../components/VideoCard";

// Popups
import LoginPopup from "../components/Popups/LoginPopup";
import SignupPopup from "../components/Popups/SignupPopup";
import PhonePopup from "../components/Popups/PhonePopup";
import OtpPopup from "../components/Popups/OtpPopup";

// Assets
import RBI_bg from "../assets/images/RBI_bg.png";
import Download_Icon from "../assets/images/download_icon.svg";
import Ombuds_Scheme_Icon from "../assets/images/ombuds_scheme_icon.svg";
import Address_Icon from "../assets/images/address_icon.svg";
import dashboardCall from "../assets/images/dashboardCall.png";
export default function RBICMS() {
  const [popup, setPopup] = useState(null); // "login" | "signup" | "phone" | "otp"
  const [identity, setIdentity] = useState({
    name: "",
    phone: "",
    countryCode: "+91",
  });
  const [activeTab, setActiveTab] = useState("File a New Complaint");

  const closePopup = useCallback(() => setPopup(null), []);

  const { setUser } = useAuth();
  const navigate = useNavigate();

  // handle success login/signup/otp
  const completeLogin = (name) => {
    setUser({ name });
    setPopup(null);
    navigate("/dashboard");
  };

  return (
    <div className="rbicms-container">
      {/* Hero with background image */}
      <section
        aria-labelledby="hero-heading"
        className="relative border-b bg-cover bg-center"
        style={{
          backgroundImage: `
      linear-gradient(270deg, rgba(217, 217, 217, 0) -13.62%, rgba(79, 99, 100, 0.635728) 34.34%, #002021 89.54%),
      url(${RBI_bg})
    `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.95,
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1
                id="hero-heading"
                className="text-3xl sm:text-4xl font-bold text-slate-900 text-white"
              >
                How can we help you today?
              </h1>

              <div className="mt-6 space-y-3">
                {[
                  {
                    label: "File a New Complaint",
                    onPress: () => {
                      setPopup("login");
                    },
                  },
                  {
                    label: "Track my Complaint",
                    onPress: () => {},
                  },
                  {
                    label: "File an Appeal",
                    onPress: () => {},
                  },
                  {
                    label: "Help us Improve",
                    onPress: () => {},
                  },
                ].map((b, idx) => (
                  <motion.div
                    key={b.label}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Button
                      variant={activeTab == b.label ? "default" : "outline"}
                      className={`w-full sm:w-auto justify-center h-11 rounded-full px-6 font-medium ${
                        activeTab == b.label
                          ? "bg-teal-600 hover:bg-teal-500 text-white"
                          : "border-2 border-slate-300  bg-transparent hover:bg-slate-50"
                      }`}
                      style={{
                        color: activeTab == b.label ? "white" : "#5FE8F6",
                      }}
                      aria-label={b.label}
                      onPress={() => {
                        setActiveTab(b.label);
                        console.log("activetab", activeTab);
                        b.onPress();
                      }}
                    >
                      {b.icon}
                      {b.label}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Advisory strip (replace your current DIV with this) */}
      <div className="advisory">
        <span className="advisory-item">
          Avoid banking through public, open or free networks.
        </span>
        <span className="advisory-item">
          The Contact Center with Toll Free #14448 is available 24x7.
        </span>
      </div>

      {/* Main */}
      <main className="main" role="main">
        <aside className="sidebar" aria-label="Quick actions">
          <QuickTile
            title="File a complaint offline by downloading our printable form below!"
            desc=""
            cta="Download Form"
            icon={Download_Icon}
          />
          <QuickTile
            title="Reserve Bank Integrated Ombudsman scheme, 2021"
            desc="Know your rights and protections."
            cta="View Details"
            icon={Ombuds_Scheme_Icon}
          />
          <QuickTile
            title="Address of Centralised Receipt and Processing Centre"
            desc="Find the official correspondence address."
            cta="View Details"
            icon={Address_Icon}
          />
        </aside>

        <section className="content">
          <section aria-labelledby="articles-heading" className="section">
            <div className="section-head">
              <h2 id="articles-heading">Articles to Assist You</h2>
            </div>
            <div className="grid">
              <ArticleCard
                title="Steps to file a complaint"
                subtitle="How to file a complaint"
              />
              <ArticleCard
                title="Steps to track a complaint"
                subtitle="How to track your complaint"
              />
              <ArticleCard
                title="Steps to file an appeal"
                subtitle="How to file an appeal"
              />
            </div>
          </section>

          <section aria-labelledby="videos-heading" className="section">
            <h2 id="videos-heading">Education and Awareness Videos</h2>
            <div className="grid">
              <VideoCard title="Basic Savings Bank Deposit Account" />
              <VideoCard title="Customer Liability in Unauthorised Electronic Banking Transactions" />
              <VideoCard title="Safe Digital Banking" />
            </div>
          </section>
        </section>
      </main>
      <img src={dashboardCall} className="callImageStyle" />
      {/* Popups */}
      {popup === "login" && (
        <LoginPopup
          onClose={() => setPopup(null)}
          onGoSignup={() => setPopup("signup")}
          onGoPhone={() => setPopup("phone")}
          onConfirm={(name) => completeLogin(name)}
        />
      )}
      {popup === "signup" && (
        <SignupPopup
          onClose={() => setPopup(null)}
          onBack={() => setPopup("login")}
          onConfirm={(name) => completeLogin(name)}
        />
      )}
      {popup === "phone" && (
        <PhonePopup
          onClose={() => setPopup(null)}
          identity={identity}
          setIdentity={setIdentity}
          onNext={() => setPopup("otp")}
        />
      )}
      {popup === "otp" && (
        <OtpPopup
          onClose={() => setPopup(null)}
          identity={identity}
          onVerified={() => completeLogin(identity.name || "User")}
        />
      )}
    </div>
  );
}
