import React, { useRef } from "react";

export default function Step3ComplaintDetails({ data, setData }) {
  const fileRef = useRef();

  const update = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }));
  const addFiles = (e) => {
    const names = Array.from(e.target.files || []).map((f) => f.name);
    setData((d) => ({ ...d, uploads: [...d.uploads, ...names] }));
    if (fileRef.current) fileRef.current.value = "";
  };
  const removeUpload = (name) =>
    setData((d) => ({ ...d, uploads: d.uploads.filter((n) => n !== name) }));

  return (
    <div className="grid">
      <label>
        Have you filed a written/electronic complaint against the entity
        already?*
        <div style={{ display: "flex", gap: 16 }}>
          <label>
            <input
              type="radio"
              checked={data.hadWrittenComplaint === "Yes"}
              onChange={() =>
                setData((d) => ({ ...d, hadWrittenComplaint: "Yes" }))
              }
            />{" "}
            Yes
          </label>
          <label>
            <input
              type="radio"
              checked={data.hadWrittenComplaint === "No"}
              onChange={() =>
                setData((d) => ({ ...d, hadWrittenComplaint: "No" }))
              }
            />{" "}
            No
          </label>
        </div>
      </label>

      <label>
        Date of the Complaint*
        <input
          value={data.writtenDate}
          onChange={update("writtenDate")}
          placeholder="DD/MM/YYYY"
        />
      </label>

      <div className="cf-upload">
        <div className="cf-upload-box">
          <input ref={fileRef} type="file" multiple onChange={addFiles} />
          <div className="cf-upload-hint">
            Upload a document / Drop your file here
          </div>
        </div>
        {data.uploads.length > 0 && (
          <ul className="cf-upload-list">
            {data.uploads.map((n) => (
              <li key={n}>
                <span>{n}</span>
                <button type="button" onClick={() => removeUpload(n)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <label>
        Have you received a response from the entity?*
        <div style={{ display: "flex", gap: 16 }}>
          <label>
            <input
              type="radio"
              checked={data.gotResponse === "Yes"}
              onChange={() => setData((d) => ({ ...d, gotResponse: "Yes" }))}
            />{" "}
            Yes
          </label>
          <label>
            <input
              type="radio"
              checked={data.gotResponse === "No"}
              onChange={() => setData((d) => ({ ...d, gotResponse: "No" }))}
            />{" "}
            No
          </label>
        </div>
      </label>

      <label>
        Date of the response*
        <input
          value={data.responseDate}
          onChange={update("responseDate")}
          placeholder="DD/MM/YYYY"
        />
      </label>

      <label>
        Have you sent a reminder to the entity?*
        <div style={{ display: "flex", gap: 16 }}>
          <label>
            <input
              type="radio"
              checked={data.sentReminder === "Yes"}
              onChange={() => setData((d) => ({ ...d, sentReminder: "Yes" }))}
            />{" "}
            Yes
          </label>
          <label>
            <input
              type="radio"
              checked={data.sentReminder === "No"}
              onChange={() => setData((d) => ({ ...d, sentReminder: "No" }))}
            />{" "}
            No
          </label>
        </div>
      </label>

      <label>
        Date of the reminder*
        <input
          value={data.reminderDate}
          onChange={update("reminderDate")}
          placeholder="DD/MM/YYYY"
        />
      </label>

      <label>
        Date of the disputed transaction*
        <input
          value={data.disputeDate}
          onChange={update("disputeDate")}
          placeholder="DD/MM/YYYY"
        />
      </label>

      <label>
        Is your complaint against the wallet of the Regulated Entity?*
        <div style={{ display: "flex", gap: 16 }}>
          <label>
            <input
              type="radio"
              checked={data.againstRegulatedEntity === "Yes"}
              onChange={() =>
                setData((d) => ({ ...d, againstRegulatedEntity: "Yes" }))
              }
            />{" "}
            Yes
          </label>
          <label>
            <input
              type="radio"
              checked={data.againstRegulatedEntity === "No"}
              onChange={() =>
                setData((d) => ({ ...d, againstRegulatedEntity: "No" }))
              }
            />{" "}
            No
          </label>
        </div>
      </label>

      <label>
        Is your complaint against a Business Correspondent?*
        <div style={{ display: "flex", gap: 16 }}>
          <label>
            <input
              type="radio"
              checked={data.againstBC === "Yes"}
              onChange={() => setData((d) => ({ ...d, againstBC: "Yes" }))}
            />{" "}
            Yes
          </label>
          <label>
            <input
              type="radio"
              checked={data.againstBC === "No"}
              onChange={() => setData((d) => ({ ...d, againstBC: "No" }))}
            />{" "}
            No
          </label>
        </div>
      </label>

      <label>
        Enter your PAN (last 4)*
        <input
          value={data.panLast4}
          onChange={update("panLast4")}
          placeholder="XXXX"
        />
      </label>

      <label>
        Enter your Account (last 4)*
        <input
          value={data.acctLast4}
          onChange={update("acctLast4")}
          placeholder="XXXX"
        />
      </label>
    </div>
  );
}
