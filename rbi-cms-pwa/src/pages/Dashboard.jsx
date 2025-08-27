import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
import RBI_bg from "../assets/images/RBI_bg.png";

/* FAQs */
const faqData = [
  {
    q: "What information do I need to provide when filing a complaint?",
    a: "You'll need to provide details about the financial institution (bank or NBFC) you're complaining against, the nature of your complaint, any relevant documents or evidence, and your contact information.",
  },
  {
    q: "Can I track the status of my complaint after filing?",
    a: "Yes. You can track your complaint using the CMS portal with your complaint reference number.",
  },
  {
    q: "Is there a time limit to file a complaint on the RBI CMS?",
    a: "Please refer to the RBI CMS guidelines for time limits based on the nature of complaint.",
  },
  {
    q: "Can I file a complaint on behalf of someone else?",
    a: "Yes, with proper authorization and supporting documents.",
  },
];

// ---- add this array near the top of Dashboard.jsx ----
const helpfulArticles = [
  {
    title: "RBI cautions about fraudulent credit cards issued in RBI’s name",
    href: "#",
  },
  {
    title: "Do not respond to emails asking for internet banking credentials",
    href: "#",
  },
  {
    title: "Sunno RBI Kya Kehta Hai — Jaankar Baniye, Satark Rahiye!",
    href: "#",
  },
];

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
    <button className="dl-btn" aria-label="Download receipt">
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

export default function Dashboard() {
  const { user } = useAuth();
  const nav = useNavigate();

  const [expanded, setExpanded] = useState(() => faqData.map(() => false));
  const complaints = []; // render empty state like the screenshot

  const toggle = (i) =>
    setExpanded((s) => s.map((v, idx) => (idx === i ? !v : v)));

  return (
    <div className="dash">
      {/* ===== HERO ===== */}
      <section
        className="hero"
        style={{
          backgroundImage: `
              linear-gradient(270deg, rgba(217, 217, 217, 0) -13.62%, rgba(79, 99, 100, 0.635728) 34.34%, #002021 89.54%),
              url(${RBI_bg})
            `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.95,
        }}
        aria-label="Dashboard banner"
      >
        <div className="hero__inner">
          <p className="hero__hello">Hello, {user?.name || "Mahesh Singh"}</p>
          <h1 className="hero__title">Your Dashboard</h1>

          {/* stacked buttons: second one below the first */}
          <div className="hero__actions hero__actions--stack">
            <button
              className="btn btn-teal btn-wide"
              onClick={() => nav("/complaint/new")}
            >
              <span className="plus">+</span> File a New Complaint
            </button>
            <button className="btn btn-outline-light btn-wide">
              Help us Improve
            </button>
          </div>
        </div>

        <div className="hero__topbar" aria-hidden />
      </section>
      {/* ===== OVERLAP WRAPPER ===== */}
      <section className="wrap">
        <h2 className="wrap__title">Complaints</h2>

        <div className="panel">
          {complaints.length === 0 ? (
            <div className="empty">
              <div className="empty__inner">
                <h3>No complaints found.</h3>
                <p>There are no complaints associated with this account.</p>
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
      {/* ===== FAQs ===== */}
      <section className="dash-section">
        <h3 className="dash-sec-title">FAQs</h3>
        <div className="faq-list">
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
      </section>
      {/* Helpful Articles */}{" "}
      <section className="dash-section">
        {" "}
        <h3 className="dash-sec-title">Helpful Articles</h3>{" "}
        <div className="help-grid">
          {" "}
          {[
            "RBI Cautions about new fraud Credit Card in the name of RBI",
            "RBI Cautions Do not respond to Mails asking for Internet Banking Account Details",
            "Sunno RBI Kya Kehta Hai... Jaankar Baniye, Satark Rahiye!",
          ].map((t, i) => (
            <article className="help-card" key={i}>
              {" "}
              <div className="help-thumb" />{" "}
              <div className="help-title">{t}</div>{" "}
              <button className="btn outline small btn-style">Know More</button>{" "}
            </article>
          ))}{" "}
        </div>{" "}
      </section>
    </div>
  );
}
