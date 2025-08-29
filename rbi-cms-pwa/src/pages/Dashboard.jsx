import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import "../styles/Dashboard.css";

/* assets */
import backArrow from "../assets/images/backArrow.svg";
import arrow from "../assets/images/arrow.svg";
import infoIcons from "../assets/images/infoIcons.svg";
import sampleImage from "../assets/images/sampleImage.png";
import dashboardCall from "../assets/images/dashboardCall.png";
import DashboardCallMobile from "../assets/images/DashboardCallMobile.png";
import GirlImage from "../assets/images/Girl_Image.png";

/* data */
const faqData = [
  {
    q: "What information do I need to provide when filing a complaint?",
    a: "You'll need details about the bank/NBFC you're complaining against, the nature of your complaint, any supporting documents or evidence, and your contact information.",
  },
  {
    q: "Can I track the status of my complaint after filing?",
    a: "Yes. Use your complaint reference number to track status on the CMS portal.",
  },
  {
    q: "Is there a time limit to file a complaint on the RBI CMS?",
    a: "Please refer to RBI CMS guidelines for time limits based on the nature of the complaint.",
  },
  {
    q: "Can I file a complaint on behalf of someone else?",
    a: "Yes, with proper authorization and supporting documents.",
  },
];

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
      "Issues with prepaid instruments (wallets or gift cards)",
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

/* small icons */
function DocIcon() {
  return (
    <svg
      className="doc-icon"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M14 3v5h5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 12h8M8 16h8" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function DownloadButton() {
  return (
    <button className="dl-btn" aria-label="Download receipt" type="button">
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
        <path
          d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

/* card */
function ComplaintCard({ c }) {
  return (
    <article className="complaint-card">
      <header className="complaint-head">
        <div className="ch-left">
          <DocIcon />
          <div className="ch-title">
            <div className="ch-line1">Complaint #{c.id}</div>
            <div className="ch-sub">Submitted : {c.submitted}</div>
          </div>
        </div>
        <DownloadButton />
      </header>
      <div className="complaint-body">
        <p className="complaint-status">
          <span className="status-label">Status :</span>{" "}
          <strong>{c.status}</strong>{" "}
          {c.statusMeta && <span className="status-meta">{c.statusMeta}</span>}
        </p>
        {c.description && <p className="complaint-desc">{c.description}</p>}
        {c.footerNote && <p className="complaint-note">{c.footerNote}</p>}
        <div className="complaint-actions">
          {c.actions?.map((a, i) => (
            <button
              key={i}
              className={`btn ${i === 0 ? "outline-pill" : "primary-pill"}`}
              type="button"
            >
              {a}
            </button>
          ))}
        </div>
      </div>
    </article>
  );
}

/* page */
export default function Dashboard() {
  const { user } = useAuth();
  const nav = useNavigate();

  const complaintsData = [
    {
      id: "ABC0123456",
      submitted: "30th Aug 2024",
      status: "Submitted to Bank",
      statusMeta:
        "Your complaint is being sent to the bank. You can track current status.",
      actions: ["Withdraw Complaint", "Track Status"],
    },
    {
      id: "ABC0123458",
      submitted: "10th Aug 2024",
      status: "Complaint Resolved",
      statusMeta:
        "Ref: 55X 2024. Please provide feedback. 15 days left to file appeal.",
      actions: ["File an Appeal", "Help us Improve"],
    },
  ];
  const [complaints] = useState(complaintsData);

  const [expanded, setExpanded] = useState(() => faqData.map(() => false));
  const [activeTab, setActiveTab] = useState("");

  const toggleFaq = (i) =>
    setExpanded((s) => s.map((v, idx) => (idx === i ? !v : v)));

  /* learning centre scroller */
  const learnRef = useRef(null);
  const scrollLearn = (dir = 1) => {
    const el = learnRef.current;
    if (!el) return;
    const step = Math.min(el.clientWidth * 0.9, 640);
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const heroButtons = [
    { label: "File a New Complaint", onPress: () => nav("/complaint/new") },
    { label: "Track my Complaint", onPress: () => {} },
    { label: "File an Appeal", onPress: () => {} },
    { label: "Help us Improve", onPress: () => {} },
  ];

  const handleHeroButton = (b) => {
    setActiveTab(b.label);
    if (typeof b.onPress === "function") b.onPress();
  };

  return (
    <div className="dash">
      {/* HERO */}
      <section aria-labelledby="hero-heading" className="hero-landing">
        <div className="hero-grid">
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

          <div className="hero-image-wrapper">
            <img src={GirlImage} alt="User with phone" className="hero-image" />
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

        {/* pills (half overlap) */}
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
                  onPress={() =>
                    handleHeroButton(b)
                  } /* supports Button impls that emit onPress */
                >
                  {b.label}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* YOUR COMPLAINTS */}
      <section className="wrap">
        <h2 className="wrap__title">Your complaints</h2>
        <div className="panel">
          {complaints.length === 0 ? (
            <div className="empty">
              <div className="empty__inner">
                <div>
                  <h3>No complaints found.</h3>
                  <p>There are no complaints associated with this account.</p>
                </div>
                <button
                  className="btn btn-teal btn-lg"
                  onClick={() => nav("/complaint/new")}
                >
                  <span className="plus">+</span> File a Complaint Now
                </button>
              </div>
            </div>
          ) : (
            <div className="complaints-grid">
              {complaints.map((c) => (
                <ComplaintCard c={c} key={c.id} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* WHAT YOU CAN COMPLAIN ABOUT */}
      <section className="learnStyle">
        <h3>What you can complain about</h3>
        <div className="moreInfo">
          You can approach RBI if your bank, NBFC, or payment service provider
          fails to resolve your concern within 30 days. Common issues include:
        </div>

        <div className="wholeBox" role="list">
          {complainCards.map((card, idx) => (
            <div
              key={card.title}
              className={`complainBox ${idx % 2 === 1 ? "whiteColor" : ""}`}
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
      </section>

      {/* FAQs (LEFT) + Learning (RIGHT) */}
      <section className="dash-section two-col equal">
        {/* Left: FAQs */}
        <div className="faq-col">
          <h3 className="dash-sec-title">FAQs</h3>
          <div className="faq-list scroll-panel">
            {faqData.map((f, i) => (
              <div key={i} className={`faq-item ${expanded[i] ? "open" : ""}`}>
                <button
                  className="faq-q"
                  onClick={() => toggle(i)}
                  aria-expanded={expanded[i]}
                >
                  {f.q}
                  <span className="faq-icon" aria-hidden>
                    {expanded[i] ? "▴" : "▾"}
                  </span>
                </button>
                <div className="faq-a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Learning centre */}
        <div className="learn-col">
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

          {/* grid inside its half; no horizontal scroll */}
          <div className="learn-grid">
            {learningCards.map((c) => (
              <article className="learn-card" key={c.title}>
                <img src={c.img} className="learn-img" alt="" />
                <p className="learn-title">{c.title}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CALL BANNER */}
      <picture>
        <source srcSet={DashboardCallMobile} media="(max-width: 800px)" />
        <img
          src={dashboardCall}
          className="callImageStyle"
          alt="Other ways to file a complaint"
        />
      </picture>
    </div>
  );
}
