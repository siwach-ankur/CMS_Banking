import React from "react";

export default function Step4AdditionalInfo({ data, setData }) {
  const update = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }));
  const setBool = (k, val) => setData((d) => ({ ...d, [k]: val }));

  return (
    <div className="grid">
      <p style={{ color: "#667085", margin: "0 0 6px" }}>
        Please let us know which product from the entity your issue is related
        to.
      </p>

      <label>
        Which service is your complaint related to?*
        <select value={data.serviceType} onChange={update("serviceType")}>
          <option value="">Select service</option>
          <option>Credit Card</option>
          <option>Savings Account</option>
          <option>Loan</option>
        </select>
      </label>

      <label>
        Which part of the service?*
        <select value={data.servicePart} onChange={update("servicePart")}>
          <option value="">Select part</option>
          <option>Related to Fees/Charges on Card</option>
          <option>Transaction failure</option>
          <option>KYC/Onboarding</option>
        </select>
      </label>

      <label>
        Please choose a complaint reason from the list*
        <select
          value={data.complaintReason}
          onChange={update("complaintReason")}
        >
          <option value="">Select a reason</option>
          <option>
            I was charged an annual fee for a 'lifetime free' card
          </option>
          <option>Refund not received</option>
          <option>Unauthorised transaction</option>
        </select>
      </label>

      <label>
        Give us a brief description of the facts of your complaint.
        <textarea
          rows={4}
          maxLength={2000}
          value={data.complaintBrief}
          onChange={update("complaintBrief")}
          placeholder="Write here..."
        />
        <div className="help">Max 2000 characters</div>
      </label>

      <div
        className="field"
        style={{ marginTop: 6, fontWeight: 600, color: "#1f2937" }}
      >
        Details about Your Compensation
      </div>

      <label>
        Enter the amount involved in the dispute (if any)*
        <input
          value={data.amountInvolved}
          onChange={update("amountInvolved")}
          placeholder="₹ 0"
        />
      </label>

      <label>
        Enter compensation required (if any)*
        <input
          value={data.compensationRequired}
          onChange={update("compensationRequired")}
          placeholder="₹ 0"
        />
      </label>

      <div
        className="field"
        style={{ marginTop: 6, fontWeight: 600, color: "#1f2937" }}
      >
        Authorisation
      </div>

      <label>
        If you want to authorise a representative to appear and make submission
        on your behalf before the Ombudsman, select “Yes”.*
        <div style={{ display: "flex", gap: 16 }}>
          <label>
            <input
              type="radio"
              checked={data.authorizeRep === "Yes"}
              onChange={() => setBool("authorizeRep", "Yes")}
            />{" "}
            Yes
          </label>
          <label>
            <input
              type="radio"
              checked={data.authorizeRep === "No"}
              onChange={() => setBool("authorizeRep", "No")}
            />{" "}
            No
          </label>
        </div>
      </label>

      <label>
        Declaration*
        <span
          style={{
            display: "flex",
            gap: 8,
            alignItems: "flex-start",
            marginTop: 6,
          }}
        >
          <input
            type="checkbox"
            checked={!!data.declarationAccepted}
            onChange={(e) => setBool("declarationAccepted", e.target.checked)}
          />
          <span>
            I / We declare that the information furnished above is true and
            correct.
          </span>
        </span>
      </label>
    </div>
  );
}
