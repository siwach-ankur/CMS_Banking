import React, { useRef, createRef } from "react";
import "../../styles/Popups.css";

export default function OtpPopup({
  onClose,
  identity,
  onVerified,
  onEditPhone,
}) {
  const inputRefs = useRef(Array.from({ length: 6 }, () => createRef()));

  const onChange = (idx) => (e) => {
    const v = e.target.value.replace(/\D/g, "").slice(0, 1);
    e.target.value = v;
    if (v && idx < 5) inputRefs.current[idx + 1]?.current?.focus();
  };

  const onKeyDown = (idx) => (e) => {
    if (
      (e.key === "Backspace" || e.key === "Delete") &&
      !e.currentTarget.value &&
      idx > 0
    ) {
      inputRefs.current[idx - 1]?.current?.focus();
    }
  };

  const verify = () => {
    const code = inputRefs.current.map((r) => r.current?.value || "").join("");
    if (code.length !== 6) return alert("Please enter the 6-digit OTP.");
    onVerified?.();
  };

  return (
    <div
      className="popup-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Enter OTP"
    >
      <div className="popup">
        <h2>Proceed with phone number</h2>

        <div className="otp-label-row">
          <p className="hint m-0">Enter OTP</p>
          <button
            type="button"
            className="link link-inline"
            onClick={onEditPhone}
          >
            Edit phone number
          </button>
        </div>

        <div className="otp-row" aria-label="Enter 6 digit code">
          {inputRefs.current.map((ref, idx) => (
            <input
              key={idx}
              ref={ref}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              className="otp-box"
              placeholder="#"
              onChange={onChange(idx)}
              onKeyDown={onKeyDown(idx)}
              aria-label={`Digit ${idx + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          className="link link-block"
          onClick={() => alert("OTP resent (demo).")}
        >
          Resend code
        </button>

        <p className="hint policy">
          By continuing, you agree that we create an account for you (unless
          already created), and accept our Terms and Conditions and Privacy
          Policy.
        </p>
        <div className="pop-actions space-between">
          <button className="closeButton" onClick={onClose}>
            Back
          </button>
          <button className="closeButton confirmStyle" onClick={verify}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
