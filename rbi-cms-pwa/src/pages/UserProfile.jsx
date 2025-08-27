import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/UserProfile.css";
import ProfilePic from "../assets/images/ProfilePic.png";

export default function UserProfile() {
  const { user, setUser } = useAuth();
  const fileRef = useRef(null);

  // VIEW data (saved)
  const [profile, setProfile] = useState({
    fullName: user?.name || "Mahesh Singh",
    mobileCode: "+91",
    mobile: "9877654342",
    email: "maheshsingh@gmail.com",
    pin: "400080",
    state: "MAHARASHTRA",
    district: "Mumbai Suburban",
    address: "602, Shiv Kripa CHS, LBS Marg, Mulund W",
  });

  // EDIT draft
  const [form, setForm] = useState(profile);
  const [editMode, setEditMode] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const startEdit = () => {
    setForm(profile);
    setEditMode(true);
  };

  const save = () => {
    setProfile(form);
    setEditMode(false);
    if (form.fullName && form.fullName !== user?.name) {
      setUser((u) => ({ ...(u || {}), name: form.fullName }));
    }
  };

  return (
    <div className="profile-container">
      {/* Breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/" className="crumb">
          Home
        </Link>
        <span className="crumb-sep" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
            <path
              d="M7 5l6 5-6 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <Link to="/profile" className="crumb active" aria-current="page">
          Profile
        </Link>
      </nav>

      {/* Card */}
      <section className="profile-card" aria-labelledby="profile-heading">
        <header className="profile-header">
          <div className="profile-id">
            <div className="profile-avatar">
              <img src={ProfilePic} alt="User avatar" />
              {editMode && (
                <>
                  <button
                    type="button"
                    className="avatar-edit"
                    onClick={() => fileRef.current?.click()}
                    aria-label="Change profile picture"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"
                        fill="currentColor"
                      />
                      <path
                        d="M20.71 7.04a1.003 1.003 0 000-1.42l-2.34-2.34a1.003 1.003 0 00-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <input
                    ref={fileRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={() => {}}
                  />
                </>
              )}
            </div>
            <div className="title-wrap">
              <p className="eyebrow">Your Profile</p>
              <h1 id="profile-heading" className="username">
                {editMode ? form.fullName : profile.fullName}
              </h1>
            </div>
          </div>

          <div className="profile-actions">
            {!editMode ? (
              <button className="btn primary btn-wide" onClick={startEdit}>
                Edit Details
              </button>
            ) : (
              <button className="btn primary btn-wide" onClick={save}>
                Save Changes
              </button>
            )}
          </div>
        </header>

        {!editMode ? (
          // ===== VIEW MODE =====
          <div className="profile-info" role="list">
            <div className="row" role="listitem">
              <span className="label">Full Name</span>
              <span className="value">{profile.fullName}</span>
            </div>
            <div className="row" role="listitem">
              <span className="label">Mobile Number</span>
              <span className="value">
                {profile.mobileCode} {profile.mobile}
              </span>
            </div>
            <div className="row" role="listitem">
              <span className="label">Email ID</span>
              <span className="value">
                {profile.email.replace(/(.{3}).+(@.+)/, "$1xxxxxxx$2")}
              </span>
            </div>

            <hr className="divider" />

            <h2 className="section-title">Address Details</h2>

            <div className="row" role="listitem">
              <span className="label">Pin Code</span>
              <span className="value">{profile.pin}</span>
            </div>
            <div className="row" role="listitem">
              <span className="label">State/ Union Territory</span>
              <span className="value">{profile.state}</span>
            </div>
            <div className="row" role="listitem">
              <span className="label">District</span>
              <span className="value">{profile.district}</span>
            </div>
            <div className="row" role="listitem">
              <span className="label">Address Line 1</span>
              <span className="value">{profile.address}</span>
            </div>
          </div>
        ) : (
          // ===== EDIT MODE =====
          <form className="profile-form" onSubmit={(e) => e.preventDefault()}>
            <label>
              Full Name
              <input value={form.fullName} onChange={update("fullName")} />
            </label>

            <label>
              Mobile Number
              <div className="inline">
                <select value={form.mobileCode} onChange={update("mobileCode")}>
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <input value={form.mobile} onChange={update("mobile")} />
              </div>
            </label>

            <label>
              Email ID
              <input
                type="email"
                value={form.email}
                onChange={update("email")}
              />
            </label>

            <h2 className="section-title mt">Address Details</h2>

            <label>
              Pin Code
              <input value={form.pin} onChange={update("pin")} />
            </label>

            <label>
              State/ Union Territory
              <select value={form.state} onChange={update("state")}>
                <option>MAHARASHTRA</option>
                <option>DELHI</option>
                <option>KARNATAKA</option>
                <option>UTTAR PRADESH</option>
              </select>
            </label>

            <label>
              District
              <input value={form.district} onChange={update("district")} />
            </label>

            <label>
              Address Line 1
              <input value={form.address} onChange={update("address")} />
            </label>
          </form>
        )}
      </section>
    </div>
  );
}
