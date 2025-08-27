import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import "../styles/RBICMS.css";

import QuickTile from "../components/QuickTile";
import ArticleCard from "../components/ArticleCard";
import VideoCard from "../components/VideoCard";

import LoginPopup from "../components/Popups/LoginPopup";
import SignupPopup from "../components/Popups/SignupPopup";
import PhonePopup from "../components/Popups/PhonePopup";
import OtpPopup from "../components/Popups/OtpPopup";

import RBI_bg from "../assets/images/RBI_bg.png";
import Download_Icon from "../assets/images/download_icon.svg";
import Ombuds_Scheme_Icon from "../assets/images/ombuds_scheme_icon.svg";
import Address_Icon from "../assets/images/address_icon.svg";
import dashboardCall from "../assets/images/dashboardCall.png";
import DashboardCallMobile from "../assets/images/DashboardCallMobile.png";
import arrow from "../assets/images/arrow.svg";
import backArrow from "../assets/images/backArrow.svg";
import sampleImage from "../assets/images/sampleImage.png";
import infoIcons from "../assets/images/infoIcons.svg";

export default function RBICMS() {
  const [popup, setPopup] = useState(null);
  const [identity, setIdentity] = useState({
    name: "",
    phone: "",
    countryCode: "+91",
  });
  const [activeTab, setActiveTab] = useState("File a New Complaint");

  const { setUser } = useAuth();
  const navigate = useNavigate();

  const completeLogin = (name) => {
    setUser({ name });
    setPopup(null);
    navigate("/dashboard");
  };

  return (
    <div className="rbicms-container">
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
      <div className="advisory">
        <span className="advisory-item">
          Avoid banking through public, open or free networks.
        </span>
        <span className="advisory-item">
          The Contact Center with Toll Free #14448 is available 24x7.
        </span>
      </div>
      <div className="learnStyle">
        <h3>What you can complain about</h3>
        <div className="moreInfo">
          You can approach RBI if your bank, NBFC, or payment service provider
          fails to resolve your concern within 30 days. Common issues include:
        </div>
        <div className="wholeBox">
          <div className="complainBox">
            <div className="complainBoxHeading">
              <img src={infoIcons} />
              <h5>Banking Services</h5>
            </div>
            <h4>Account opening or closure delays</h4>
            <h4>Non-adherence to interest rates or deposit terms</h4>
            <h4>Unfair charges or fees</h4>
            <h4>ATM, cheque, or cash handling problems</h4>
          </div>
          <div className="complainBox whiteColor">
            <div className="complainBoxHeading">
              <img src={infoIcons} />
              <h5>Banking Services</h5>
            </div>
            <h4>Account opening or closure delays</h4>
            <h4>Non-adherence to interest rates or deposit terms</h4>
            <h4>Unfair charges or fees</h4>
            <h4>ATM, cheque, or cash handling problems</h4>
          </div>
          <div className="complainBox">
            <div className="complainBoxHeading">
              <img src={infoIcons} />
              <h5>Banking Services</h5>
            </div>
            <h4>Account opening or closure delays</h4>
            <h4>Non-adherence to interest rates or deposit terms</h4>
            <h4>Unfair charges or fees</h4>
            <h4>ATM, cheque, or cash handling problems</h4>
          </div>
          <div className="complainBox whiteColor">
            <div className="complainBoxHeading">
              <img src={infoIcons} />
              <h5>Banking Services</h5>
            </div>
            <h4>Account opening or closure delays</h4>
            <h4>Non-adherence to interest rates or deposit terms</h4>
            <h4>Unfair charges or fees</h4>
            <h4>ATM, cheque, or cash handling problems</h4>
          </div>
        </div>
      </div>
      <div className="learnStyle">
        <div className="headingView">
          <h3>Learning centre</h3>
          <div>
            <button className="btn outline ">
              <img src={backArrow} />
            </button>
            <button className="btn primary btn-style ">
              <img src={arrow} />
            </button>
          </div>
        </div>
        <div className="imageView">
          <div>
            <img src={sampleImage} className="imageStyle" />
            <p>How to file a complaint?</p>
          </div>
          <div>
            <img src={sampleImage} className="imageStyle" />
            <p>How do I track my complaints?</p>
          </div>
          <div>
            <img src={sampleImage} className="imageStyle" />
            <p>Basic savings Bank deposit account</p>
          </div>
          <div>
            <img src={sampleImage} className="imageStyle" />
            <p>
              Customer Liability in Unauthorised Electronic Banking Transactions
            </p>
          </div>
          <div>
            <img src={sampleImage} className="imageStyle" />
            <p>
              Customer Liability in Unauthorised Electronic Banking Transactions
            </p>
          </div>
        </div>
      </div>
      <picture>
        <source
          srcSet={DashboardCallMobile}
          className="callImageStyleMobile"
          media="(max-width: 800px)"
        />
        <img src={dashboardCall} className="callImageStyle" alt="Dashboard" />
      </picture>
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
