import React from "react";

export default function Step1Complainant({ data, setData }) {
  const update = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }));

  return (
    <div className="grid">
      <label>
        Full Name*
        <input
          value={data.fullName}
          onChange={update("fullName")}
          placeholder="Enter your full name"
        />
      </label>

      <label>
        Mobile Number*
        <div className="inline-2">
          <select value={data.mobileCode} onChange={update("mobileCode")}>
            <option value="+91">+91</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
          </select>
          <input
            value={data.mobile}
            onChange={update("mobile")}
            placeholder="9877654342"
          />
        </div>
      </label>

      <label>
        Email ID*
        <input
          value={data.email}
          onChange={update("email")}
          placeholder="Type your Email ID here"
        />
      </label>

      <label>
        Complainant Category*
        <select
          value={data.complainantCategory}
          onChange={update("complainantCategory")}
        >
          <option value="">Select a Category</option>
          <option value="PSU">PSU</option>
          <option value="Individual">Individual</option>
          <option value="Government Department">Government Department</option>
        </select>
      </label>

      <div
        className="field"
        style={{ marginTop: 6, fontWeight: 600, color: "#1f2937" }}
      >
        Address Details
      </div>

      <label>
        Pin Code*
        <input
          value={data.pin}
          onChange={update("pin")}
          placeholder="Enter Pin Code"
        />
      </label>

      <label>
        State/ Union Territory*
        <select value={data.state} onChange={update("state")}>
          <option value="">Select a State</option>
          <option>Maharashtra</option>
          <option>Delhi</option>
          <option>Karnataka</option>
        </select>
      </label>

      <label>
        District*
        <select value={data.district} onChange={update("district")}>
          <option value="">Select a District</option>
          <option>Mumbai Suburban</option>
          <option>Pune</option>
        </select>
      </label>

      <label>
        Address Line 1*
        <input
          value={data.address1}
          onChange={update("address1")}
          placeholder="Flat No./Building Name/Street Name/Area"
        />
      </label>
    </div>
  );
}
