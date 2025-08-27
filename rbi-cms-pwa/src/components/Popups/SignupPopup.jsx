import React, { useState } from "react";
import "../../styles/Popups.css";

export default function SignupPopup({ onClose, onConfirm }) {
  const [form, setForm] = useState({
    name: "Mahesh Ram Singh",
    email: "mahesh.singh@gmail.com",
    phone: "9877654342",
    pass: "",
    confirm: "",
  });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.pass || form.pass !== form.confirm) {
      alert("Passwords do not match.");
      return;
    }

    console.log("Form submitted:", form);

    alert(`Account created for ${form.name} (${form.email})`);
    onConfirm(form.name);
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

        <form onSubmit={submit}>
          <div className="form-row">
            <input
              className="input"
              placeholder="Enter Name"
              value={form.name}
              onChange={update("name")}
              required
            />
            <input
              className="input"
              placeholder="Enter Email ID"
              value={form.email}
              onChange={update("email")}
              required
            />
            <input
              className="input"
              placeholder="Enter Phone Number"
              value={form.phone}
              onChange={update("phone")}
              required
            />
            <input
              className="input"
              type="password"
              placeholder="Enter Password"
              value={form.pass}
              onChange={update("pass")}
              required
            />
            <input
              className="input"
              type="password"
              placeholder="Confirm Password"
              value={form.confirm}
              onChange={update("confirm")}
              required
            />
          </div>

          <div className="pop-actions">
            <button className="closeButton" onClick={onClose}>
              Close
            </button>
            <button className="closeButton confirmStyle">Confirm</button>
          </div>
        </form>
      </div>
    </div>
  );
}
