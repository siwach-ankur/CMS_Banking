import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Header.css";
import RBI_Logo from "../assets/images/RBI_Logo.png";
import searchIcon from "../assets/images/search.svg";
import LoginPopup from "./Popups/LoginPopup";
import SignupPopup from "./Popups/SignupPopup";
import PhonePopup from "./Popups/PhonePopup";
import OtpPopup from "./Popups/OtpPopup";

export default function Header() {
  const { user, setUser } = useAuth();
  const [newUser, setNewUser] = useState(false);
  const nav = useNavigate();
  const { pathname } = useLocation();
  const [popup, setPopup] = useState(null);

  const [identity, setIdentity] = useState({
    name: "",
    phone: "",
    countryCode: "+91",
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("English");

  const languages = ["English", "हिंदी", "Français", "Español"];

  const handleSelect = (lang) => {
    setSelected(lang);
    setOpen(false);
  };
  const menuRef = useRef(null);

  useEffect(() => setMenuOpen(false), [pathname]);

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
          {!user && (
            <div className="headerSearch">
              <img src={searchIcon} />
              <input />
            </div>
          )}
        </div>

        <div className="hdr-right">
          {!user && (
            <div className="hdr-controls">
              <div className="toggle">
                <span>Dark mode</span>
                <button
                  className={`switch${isDark ? " on" : ""}`}
                  type="button"
                  aria-label="toggle dark mode"
                  onClick={() => setIsDark(!isDark)}
                >
                  <span className="knob" />
                </button>
              </div>
              <div className="dropdown-container">
                <button
                  className="plain-btn dropdown"
                  type="button"
                  onClick={() => setOpen(!open)}
                >
                  {selected} <span className="caret">▾</span>
                </button>

                {open && (
                  <ul className="dropdown-menu">
                    {languages.map((lang) => (
                      <li key={lang}>
                        <button
                          className="dropdown-item"
                          onClick={() => handleSelect(lang)}
                        >
                          {lang}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <a className="plain-link" href="#help">
                Help
              </a>
            </div>
          )}

          {!user ? (
            <div className="auth">
              <button
                className="btn-style2"
                onClick={() =>
                  newUser ? setPopup("signup") : setPopup("login")
                }
              >
                Login / Sign Up
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
