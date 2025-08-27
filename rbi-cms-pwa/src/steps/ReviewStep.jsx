import React from "react";

export default function ReviewStep({ data, onEdit }) {
  const row = (k, v) => (
    <div className="rv-row" key={k}>
      <div className="rv-k">{k}</div>
      <div className="rv-v">{v || "-"}</div>
    </div>
  );

  return (
    <div className="rv">
      <h2>Review Your Complaint Details</h2>

      <div className="rv-section">
        <div className="rv-title">
          <span>Complainant Details</span>
          <button className="link-btn" onClick={() => onEdit(1)}>
            ✎ Edit
          </button>
        </div>
        {row("Customer Name", data.fullName)}
        {row("Mobile Number", `${data.mobileCode || ""} ${data.mobile || ""}`)}
        {row("Email ID", data.email)}
        {row("Complainant Category", data.complainantCategory)}
        {row("Pin Code", data.pin)}
        {row("State", data.state)}
        {row("District", data.district)}
        {row("Address Line 1", data.address1)}
      </div>

      <div className="rv-section">
        <div className="rv-title">
          <span>Entity Details</span>
          <button className="link-btn" onClick={() => onEdit(2)}>
            ✎ Edit
          </button>
        </div>
        {row("Entity Name", data.entityName)}
        {row("Related to Credit Card", data.creditCardRelated)}
        {row("State", data.entityState)}
        {row("District", data.entityDistrict)}
        {row("Branch", data.entityBranch)}
        {row("Under case/arbitration", data.q_currentlyUnderCase)}
        {row("Filed through lawyer", data.q_throughLawyer)}
        {row("Already with Ombudsman", data.q_alreadyWithOmbudsman)}
        {row("Regulated entity staff", data.q_regulatedEntityStaff)}
      </div>

      <div className="rv-section">
        <div className="rv-title">
          <span>Complaint Details</span>
          <button className="link-btn" onClick={() => onEdit(3)}>
            ✎ Edit
          </button>
        </div>
        {row("Written complaint submitted", data.hadWrittenComplaint)}
        {row("Date of complaint", data.writtenDate)}
        {row("Received a response", data.gotResponse)}
        {row("Date of response", data.responseDate)}
        {row("Reminder sent", data.sentReminder)}
        {row("Date of reminder", data.reminderDate)}
        {row("Date of disputed transaction", data.disputeDate)}
        {row("Against RE wallet", data.againstRegulatedEntity)}
        {row("Against Business Correspondent", data.againstBC)}
        {row("PAN last 4", data.panLast4)}
        {row("Account last 4", data.acctLast4)}
        {row(
          "Documents Uploaded",
          data.uploads?.length ? data.uploads.join(", ") : "None"
        )}
      </div>

      <div className="rv-section">
        <div className="rv-title">
          <span>Additional Information</span>
          <button className="link-btn" onClick={() => onEdit(4)}>
            ✎ Edit
          </button>
        </div>
        {row("Service", data.serviceType)}
        {row("Part of service", data.servicePart)}
        {row("Complaint reason", data.complaintReason)}
        {row("Brief description", data.complaintBrief)}
        {row("Amount involved (₹)", data.amountInvolved)}
        {row("Compensation required (₹)", data.compensationRequired)}
        {row("Authorised Representative", data.authorizeRep)}
        {row("Declaration Selected", data.declarationAccepted ? "Yes" : "No")}
      </div>
    </div>
  );
}
