import React from "react";
import "../../styles/Popups.css";

export default function PhonePopup({ onClose, identity, setIdentity, onNext }) {
  const update = (k) => (e) =>
    setIdentity((f) => ({ ...f, [k]: e.target.value }));

  const canNext = identity.name.trim() && identity.phone.trim();

  return (
    <div
      className="popup-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Proceed with phone number"
    >
      <div className="popup">
        <h2>Proceed with phone number</h2>

        <div className="form-row">
          <label className="visually-hidden" htmlFor="name">
            Enter Name
          </label>
          <input
            id="name"
            className="input"
            placeholder="Enter Name"
            value={identity.name}
            onChange={update("name")}
            autoFocus
          />

          <div className="inline">
            <select
              aria-label="Country Code"
              className="select"
              value={identity.countryCode}
              onChange={update("countryCode")}
            >
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
            </select>
            <input
              className="input"
              placeholder="Enter Phone Number"
              value={identity.phone}
              onChange={update("phone")}
            />
          </div>
        </div>

        <div className="pop-actions">
          <button className="btn outline btn-style" onClick={onClose}>
            Back
          </button>
          <button
            className="btn primary btn-style"
            onClick={onNext}
            disabled={!canNext}
            aria-disabled={!canNext}
          >
            Get OTP
          </button>
        </div>
      </div>
    </div>
  );
}
