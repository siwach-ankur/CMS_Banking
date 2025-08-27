import React, { useState } from "react";
import "../../styles/Popups.css";

export default function LoginPopup({
  onClose,
  onGoSignup,
  onGoPhone,
  onConfirm,
}) {
  const [username, setUsername] = useState("Mahesh Singh");
  const [password, setPassword] = useState("");

  return (
    <div className="popup-backdrop" role="dialog" aria-modal="true">
      <div className="popup">
        <h2>Login</h2>
        <p className="hint">
          New user?{" "}
          <span className="link" onClick={onGoSignup}>
            Create an account
          </span>
        </p>

        <div className="form-row">
          <input
            className="input"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="input"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <p className="hint">
          Don’t want to create an account? <br />
          <span className="link" onClick={onGoPhone}>
            Proceed with name and phone number instead
          </span>
        </p>

        <div className="pop-actions">
          <button className="btn outline btn-style" onClick={onClose}>
            Close
          </button>
          <button
            className="btn primary btn-style"
            onClick={() => onConfirm(username)}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
