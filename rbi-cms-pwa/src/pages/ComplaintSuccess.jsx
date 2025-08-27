import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/ComplaintSuccess.css";

import Address_Icon from "../assets/images/address_icon.svg";

export default function ComplaintSuccess() {
  const nav = useNavigate();

  const steps = [
    { key: "reg", label: "Complaint Registered", done: true },
    { key: "rbi", label: "Complaint with RBI", done: false },
    { key: "bank", label: "Complaint with Bank", done: false },
    { key: "prog", label: "Complaint in Progress", done: false },
    { key: "res", label: "Complaint Resolved", done: false },
  ];

  return (
    <div className="cs-page">
      {/* light mint breadcrumb stripe (optional) */}
      <nav className="cs-crumbbar" aria-label="Breadcrumb">
        <div className="cs-container">
          <Link to="/" className="crumb">
            Home
          </Link>
          <span className="crumb-sep">›</span>
          <span className="crumb current">Complaint form</span>
        </div>
      </nav>
      {/* FULL-WIDTH WHITE BAND */}
      <section className="cs-band">
        <div className="cs-container">
          <h1 className="cs-title">Your complaint has been submitted!</h1>

          <p className="cs-meta">
            <span>
              Complaint ID : <strong>AHETY273882D</strong>
            </span>
            <span className="cs-meta-sep">|</span>
            <span>
              Date and Time : <strong>28th August 2024 12:15PM</strong>
            </span>
          </p>

          {/* STEPPER */}
          <ol className="st" role="list">
            {steps.map((s, i) => (
              <li className={`st-item ${s.done ? "is-done" : ""}`} key={s.key}>
                <span className="st-dot" aria-hidden>
                  {/* simple, readable icons */}
                  {i === 0 ? (
                    <svg viewBox="0 0 24 24">
                      <path
                        d="M20 7L10 17l-6-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : i === 1 ? (
                    <svg viewBox="0 0 24 24">
                      <path
                        d="M3 10h18M7 10V7a5 5 0 0110 0v3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  ) : i === 2 ? (
                    <svg viewBox="0 0 24 24">
                      <path
                        d="M3 7h18v10H3zM7 7v10M17 7v10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  ) : i === 3 ? (
                    <svg viewBox="0 0 24 24">
                      <path
                        d="M3 12h6l3-4 3 8 3-4h3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24">
                      <path
                        d="M9 12l2 2 4-4M12 22a10 10 0 110-20 10 10 0 010 20z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  )}
                </span>
                <span className="st-label">{s.label}</span>
              </li>
            ))}
          </ol>

          {/* ACTIONS */}
          <div className="cs-actions">
            <button className="btn btn-outline-dark">
              <svg viewBox="0 0 24 24" className="btn-ic" aria-hidden>
                <path
                  d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Download Complaint
            </button>
            <button className="btn btn-teal" onClick={() => nav("/dashboard")}>
              Go to Dashboard
            </button>
          </div>
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
