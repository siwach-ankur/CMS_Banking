import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Header.css";
import RBI_Logo from "../assets/images/RBI_Logo.png";

import LoginPopup from "./Popups/LoginPopup";
import SignupPopup from "./Popups/SignupPopup";
import PhonePopup from "./Popups/PhonePopup";
import OtpPopup from "./Popups/OtpPopup";

export default function Header() {
  const { user, setUser } = useAuth();
  const nav = useNavigate();
  const { pathname } = useLocation();

  // popups: null | "login" | "signup" | "phone" | "otp"
  const [popup, setPopup] = useState(null);

  // temp identity for phone/otp
  const [identity, setIdentity] = useState({
    name: "",
    phone: "",
    countryCode: "+91",
  });

  // avatar menu
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // close menu on route change
  useEffect(() => setMenuOpen(false), [pathname]);

  // close on outside click
  useEffect(() => {
    const onDown = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target))
        setMenuOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const initials = useMemo(() => {
    if (!user?.name) return "U";
    return user.name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((p) => p[0].toUpperCase())
      .join("");
  }, [user]);

  const completeLogin = (name) => {
    setUser({ name });
    setPopup(null);
    nav("/dashboard");
  };

  const logout = () => {
    setUser(null);
    setMenuOpen(false);
    nav("/");
  };

  return (
    <>
      <header className="cms-header">
        <div className="hdr-left">
          <img src={RBI_Logo} alt="RBI logo" className="hdr-logo" />
        </div>

        <div className="hdr-right">
          {/* Controls cluster */}
          <div className="hdr-controls">
            <div className="toggle">
              <span>Dark mode</span>
              <button
                className="switch"
                type="button"
                aria-label="toggle dark mode"
              >
                <span className="knob" />
              </button>
            </div>

            <button className="plain-btn dropdown" type="button">
              English <span className="caret">▾</span>
            </button>

            <a className="plain-link" href="#help">
              Help
            </a>
          </div>

          {!user ? (
            <div className="auth">
              <button className="btn-style1" onClick={() => setPopup("login")}>
                Login
              </button>
              <button className="btn-style2" onClick={() => setPopup("signup")}>
                Sign Up
              </button>
            </div>
          ) : (
            <div className="logged-in">
              <div className="avatar-wrap" ref={menuRef}>
                <button
                  className="avatar"
                  type="button"
                  onClick={() => setMenuOpen((v) => !v)}
                  aria-haspopup="menu"
                  aria-expanded={menuOpen}
                  title={user.name}
                >
                  {initials}
                </button>

                {menuOpen && (
                  <div
                    className="user-menu"
                    role="menu"
                    aria-label="Your Account"
                  >
                    <div className="user-menu-hd">
                      <div className="user-name">{user.name}</div>
                    </div>

                    <button
                      className="user-menu-item"
                      role="menuitem"
                      onClick={() => {
                        setMenuOpen(false);
                        nav("/profile");
                      }}
                    >
                      <span className="ico">👤</span> Profile
                    </button>

                    <button
                      className="user-menu-item"
                      role="menuitem"
                      onClick={() => {
                        setMenuOpen(false);
                        nav("/dashboard");
                      }}
                    >
                      <span className="ico">⚙️</span> Dashboard
                    </button>

                    <button
                      className="user-menu-item danger"
                      role="menuitem"
                      onClick={logout}
                    >
                      <span className="ico">⎋</span> Log Out
                    </button>
                  </div>
                )}
              </div>

              <button className="logout-link" onClick={logout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Auth popups */}
      {popup === "login" && (
        <LoginPopup
          onClose={() => setPopup(null)}
          onGoSignup={() => setPopup("signup")}
          onGoPhone={() => setPopup("phone")}
          onConfirm={(name) => completeLogin(name || "User")}
        />
      )}
      {popup === "signup" && (
        <SignupPopup
          onClose={() => setPopup(null)}
          onBack={() => setPopup("login")}
          onConfirm={(name) => completeLogin(name || "User")}
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
    </>
  );
}
