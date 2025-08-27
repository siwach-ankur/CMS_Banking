import React from "react";

export default function Step2Entity({ data, setData }) {
  const update = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }));

  return (
    <div className="grid">
      <p style={{ color: "#667085", margin: "0 0 6px" }}>
        Please give us details regarding the Regulated Entity against which you
        want to file a complaint.
      </p>

      <label>
        Entity Name*
        <input
          value={data.entityName}
          onChange={update("entityName")}
          placeholder="Start typing to search..."
        />
      </label>

      <label>
        Is your complaint related to Credit Card?*
        <div style={{ display: "flex", gap: 16 }}>
          <label>
            <input
              type="radio"
              checked={data.creditCardRelated === "Yes"}
              onChange={() =>
                setData((d) => ({ ...d, creditCardRelated: "Yes" }))
              }
            />{" "}
            Yes
          </label>
          <label>
            <input
              type="radio"
              checked={data.creditCardRelated === "No"}
              onChange={() =>
                setData((d) => ({ ...d, creditCardRelated: "No" }))
              }
            />{" "}
            No
          </label>
        </div>
      </label>

      <label>
        Entity State/ Union Territory*
        <select value={data.entityState} onChange={update("entityState")}>
          <option value="">Select State</option>
          <option>Maharashtra</option>
          <option>Delhi</option>
          <option>Karnataka</option>
        </select>
      </label>

      <label>
        Entity District*
        <select value={data.entityDistrict} onChange={update("entityDistrict")}>
          <option value="">Select District</option>
          <option>Mumbai Suburban</option>
          <option>Pune</option>
        </select>
      </label>

      <label>
        Entity Branch*
        <input
          value={data.entityBranch}
          onChange={update("entityBranch")}
          placeholder="Select Branch"
        />
      </label>

      <div
        className="field"
        style={{ marginTop: 6, fontWeight: 600, color: "#1f2937" }}
      >
        Entity Complaint Details
      </div>

      <label>
        Is your complaint currently under a court case, arbitration, or has it
        already been addressed?*
        <div style={{ display: "flex", gap: 16 }}>
          <label>
            <input
              type="radio"
              checked={data.q_currentlyUnderCase === "Yes"}
              onChange={() =>
                setData((d) => ({ ...d, q_currentlyUnderCase: "Yes" }))
              }
            />{" "}
            Yes
          </label>
          <label>
            <input
              type="radio"
              checked={data.q_currentlyUnderCase === "No"}
              onChange={() =>
                setData((d) => ({ ...d, q_currentlyUnderCase: "No" }))
              }
            />{" "}
            No
          </label>
        </div>
      </label>

      <label>
        Did you file your complaint through a lawyer (unless you are a lawyer
        yourself)?*
        <div style={{ display: "flex", gap: 16 }}>
          <label>
            <input
              type="radio"
              checked={data.q_throughLawyer === "Yes"}
              onChange={() =>
                setData((d) => ({ ...d, q_throughLawyer: "Yes" }))
              }
            />{" "}
            Yes
          </label>
          <label>
            <input
              type="radio"
              checked={data.q_throughLawyer === "No"}
              onChange={() => setData((d) => ({ ...d, q_throughLawyer: "No" }))}
            />{" "}
            No
          </label>
        </div>
      </label>

      <label>
        Has your complaint already been handled or is it currently being
        processed by the Ombudsman on the same issue?*
        <div style={{ display: "flex", gap: 16 }}>
          <label>
            <input
              type="radio"
              checked={data.q_alreadyWithOmbudsman === "Yes"}
              onChange={() =>
                setData((d) => ({ ...d, q_alreadyWithOmbudsman: "Yes" }))
              }
            />{" "}
            Yes
          </label>
          <label>
            <input
              type="radio"
              checked={data.q_alreadyWithOmbudsman === "No"}
              onChange={() =>
                setData((d) => ({ ...d, q_alreadyWithOmbudsman: "No" }))
              }
            />{" "}
            No
          </label>
        </div>
      </label>

      <label>
        Is the complaint from the staff of a regulated entity and involves an
        employer-employee relationship?*
        <div style={{ display: "flex", gap: 16 }}>
          <label>
            <input
              type="radio"
              checked={data.q_regulatedEntityStaff === "Yes"}
              onChange={() =>
                setData((d) => ({ ...d, q_regulatedEntityStaff: "Yes" }))
              }
            />{" "}
            Yes
          </label>
          <label>
            <input
              type="radio"
              checked={data.q_regulatedEntityStaff === "No"}
              onChange={() =>
                setData((d) => ({ ...d, q_regulatedEntityStaff: "No" }))
              }
            />{" "}
            No
          </label>
        </div>
      </label>
    </div>
  );
}
