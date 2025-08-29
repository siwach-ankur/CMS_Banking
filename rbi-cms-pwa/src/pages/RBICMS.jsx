import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import "../styles/RBICMS.css";

/* Popups */
import LoginPopup from "../components/Popups/LoginPopup";
import SignupPopup from "../components/Popups/SignupPopup";
import PhonePopup from "../components/Popups/PhonePopup";
import OtpPopup from "../components/Popups/OtpPopup";

/* assets used below */
import backArrow from "../assets/images/backArrow.svg";
import arrow from "../assets/images/arrow.svg";
import dashboardCall from "../assets/images/dashboardCall.png";
import DashboardCallMobile from "../assets/images/DashboardCallMobile.png";
import infoIcons from "../assets/images/infoIcons.svg";
import sampleImage from "../assets/images/sampleImage.png";
import GirlImage from "../assets/images/Girl_Image.png";

/* data */
const learningCards = [
  { title: "How to file a complaint?", img: sampleImage },
  { title: "How do I track my complaints?", img: sampleImage },
  { title: "Basic savings Bank deposit account", img: sampleImage },
  {
    title: "Customer Liability in Unauthorised Electronic Banking Transactions",
    img: sampleImage,
  },
];

const complainCards = [
  {
    title: "Banking Services",
    points: [
      "Account opening or closure delays",
      "Non-adherence to interest rates or deposit terms",
      "Unfair charges or fees",
      "ATM, cheque, or cash handling problems",
    ],
  },
  {
    title: "Credit Cards & Loans",
    points: [
      "Unauthorized or fraudulent credit card transactions",
      "Excessive or hidden loan charges",
      "Delay or refusal in loan disbursal",
      "Harassment by recovery agents",
    ],
  },
  {
    title: "Digital Payments & Wallets",
    points: [
      "Failed UPI or mobile wallet transactions",
      "Non-refund of failed payments",
      "Issues with prepaid instruments (gift cards/wallets)",
      "Delay in updating transaction status",
    ],
  },
  {
    title: "Customer Rights & Fair Practices",
    points: [
      "Account opening or closure delays",
      "Non-adherence to interest rates or deposit terms",
      "Unfair charges or fees",
      "ATM, cheque, or cash handling problems",
    ],
  },
];

export default function RBICMS() {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const [popup, setPopup] = useState(null);
  const [identity, setIdentity] = useState({
    name: "",
    phone: "",
    countryCode: "+91",
  });
  const [activeTab, setActiveTab] = useState("");

  const listRef = useRef(null);
  const scrollByCards = (dir = 1) => {
    const el = listRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.9, 600);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const completeLogin = (name) => {
    setUser({ name });
    setPopup(null);
    navigate("/dashboard");
  };

  const heroButtons = [
    { label: "File a New Complaint", onPress: () => setPopup("login") },
    { label: "Track my Complaint", onPress: () => {} },
    { label: "File an Appeal", onPress: () => {} },
    { label: "Help us Improve", onPress: () => {} },
  ];

  // Unified handler – works whether Button emits onClick or onPress
  const handleHeroButton = (b) => {
    setActiveTab(b.label);
    if (typeof b.onPress === "function") b.onPress();
  };

  return (
    <div className="rbicms-container">
      {/* HERO */}
      <section aria-labelledby="hero-heading" className="hero-landing">
        <div className="hero-grid">
          {/* LEFT CONTENT */}
          <div className="hero-text">
            <p className="hero-eyebrow">
              Your voice matters, and RBI ensures it is heard.
            </p>
            <p className="hero-sub">
              Lodge a new complaint, track its status, or appeal a decision —
              all in one place, with guidance at every step
            </p>
            <h1 id="hero-heading" className="hero-question">
              How can we help you today?
            </h1>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hero-image-wrapper">
            <img src={GirlImage} alt="User with phone" className="hero-image" />

            {/* FLOATING CHIPS */}
            <div className="hero-floats" aria-hidden>
              <div className="float-chip">
                <span className="float-dot" />
                Simple form, <b>clear steps</b>
              </div>
              <div className="float-chip">
                <span className="float-dot" />
                File in minutes, <b>track anytime</b>
              </div>
            </div>
          </div>
        </div>

        {/* BUTTON ROW (HALF INSIDE, HALF OUTSIDE) */}
        <div className="hero-pill-container">
          <div className="hero-pill-row">
            {heroButtons.map((b, idx) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Button
                  type="button"
                  variant={activeTab === b.label ? "default" : "outline"}
                  className={`w-full sm:w-auto justify-center h-11 rounded-full px-6 font-medium ${
                    activeTab === b.label
                      ? "bg-teal-600 hover:bg-teal-500 text-white"
                      : "border-2 border-slate-300 bg-transparent hover:bg-slate-50"
                  }`}
                  style={{ color: activeTab === b.label ? "white" : "#016971" }}
                  aria-label={b.label}
                  onClick={() => handleHeroButton(b)}
                  onPress={() => handleHeroButton(b)} // <- for components using onPress
                >
                  {b.label}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What you can complain about */}
      <div className="learnStyle after-hero">
        <h3>What you can complain about</h3>
        <div className="moreInfo">
          You can approach RBI if your bank, NBFC, or payment service provider
          fails to resolve your concern within 30 days. Common issues include:
        </div>

        <div className="wholeBox" role="list">
          {complainCards.map((card, i) => (
            <div
              key={card.title}
              className={`complainBox1 ${i % 2 === 1 ? "whiteColor" : ""}`}
              role="listitem"
            >
              <div className="complainBoxHeading">
                <img src={infoIcons} alt="" />
                <h5>{card.title}</h5>
              </div>
              {card.points.map((p) => (
                <h4 key={p}>{p}</h4>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Learning centre (with Prev/Next buttons) */}
      <div className="learnStyle">
        <div className="headingView">
          <h3>Learning centre</h3>
          <div className="lc-controls">
            <button
              className="btn-style-backward"
              aria-label="Previous"
              onClick={() => scrollByCards(-1)}
            >
              <img src={backArrow} alt="" />
            </button>
            <button
              className="btn-style-forward"
              aria-label="Next"
              onClick={() => scrollByCards(1)}
            >
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>

        <div
          ref={listRef}
          className="imageView"
          aria-label="Learning centre carousel"
        >
          {learningCards.map((c) => (
            <div key={c.title}>
              <img src={c.img} className="imageStyle" alt="" />
              <p>{c.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call banner */}
      <picture>
        <source
          srcSet={DashboardCallMobile}
          className="callImageStyleMobile"
          media="(max-width: 800px)"
        />
        <img
          src={dashboardCall}
          className="callImageStyle"
          alt="Other ways to file a complaint"
        />
      </picture>

      {/* POPUPS */}
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
