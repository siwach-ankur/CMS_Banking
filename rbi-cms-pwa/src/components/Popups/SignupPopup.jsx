import React, { useState } from "react";
import "../../styles/Popups.css";

export default function SignupPopup({ onClose, onBack }) {
  const [form, setForm] = useState({
    name: "Mahesh Ram Singh",
    email: "mahesh.singh@gmail.com",
    phone: "9877654342",
    pass: "",
    confirm: "",
  });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = () => {
    if (!form.pass || form.pass !== form.confirm) {
      alert("Passwords do not match.");
      return;
    }
    alert("Account created (demo).");
    onClose();
  };

  return (
    <div
      className="popup-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Create an account"
    >
      <div className="popup">
        <h2>Create an account</h2>
        <p className="hint mg-top0">Enter your details to proceed.</p>

        <div className="form-row">
          <input
            className="input"
            placeholder="Enter Name"
            value={form.name}
            onChange={update("name")}
          />
          <input
            className="input"
            placeholder="Enter Email ID"
            value={form.email}
            onChange={update("email")}
          />
          <input
            className="input"
            placeholder="Enter Phone Number"
            value={form.phone}
            onChange={update("phone")}
          />
          <input
            className="input"
            type="password"
            placeholder="Enter Password"
            value={form.pass}
            onChange={update("pass")}
          />
          <input
            className="input"
            type="password"
            placeholder="Confirm Password"
            value={form.confirm}
            onChange={update("confirm")}
          />
        </div>

        <div className="pop-actions">
          <button className="btn outline btn-style" onClick={onClose}>
            Close
          </button>
          <button
            className="btn primary btn-style"
            onClick={() => alert("Logged in (demo).")}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
