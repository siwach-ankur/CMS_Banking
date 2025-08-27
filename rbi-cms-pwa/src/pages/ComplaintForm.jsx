import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ComplaintForm.css";

/* Steps (reuse your existing step bodies) */
import Step1Complainant from "../steps/Step1Complainant";
import Step2Entity from "../steps/Step2Entity";
import Step3ComplaintDetails from "../steps/Step3ComplaintDetails";
import Step4AdditionalInfo from "../steps/Step4AdditionalInfo";
import ReviewStep from "../steps/ReviewStep";

/* ------------------------ Data ------------------------ */
const initialData = {
  // Step 1
  fullName: "Mahesh Singh",
  mobileCode: "+91",
  mobile: "9877654342",
  email: "",
  complainantCategory: "",
  pin: "",
  state: "",
  district: "",
  address1: "",

  // Step 2
  entityName: "",
  creditCardRelated: "No",
  entityState: "",
  entityDistrict: "",
  entityBranch: "",
  q_currentlyUnderCase: "No",
  q_throughLawyer: "No",
  q_alreadyWithOmbudsman: "No",
  q_regulatedEntityStaff: "No",

  // Step 3
  hadWrittenComplaint: "",
  writtenDate: "",
  gotResponse: "",
  responseDate: "",
  sentReminder: "",
  reminderDate: "",
  disputeDate: "",
  againstRegulatedEntity: "",
  againstBC: "",
  panLast4: "",
  acctLast4: "",
  uploads: [],

  // Step 4
  serviceType: "",
  servicePart: "",
  complaintReason: "",
  complaintBrief: "",
  amountInvolved: "",
  compensationRequired: "",
  authorizeRep: "No",
  declarationAccepted: false,
};

const stepKeys = {
  1: [
    "fullName",
    "mobileCode",
    "mobile",
    "email",
    "complainantCategory",
    "pin",
    "state",
    "district",
    "address1",
  ],
  2: [
    "entityName",
    "creditCardRelated",
    "entityState",
    "entityDistrict",
    "entityBranch",
    "q_currentlyUnderCase",
    "q_throughLawyer",
    "q_alreadyWithOmbudsman",
    "q_regulatedEntityStaff",
  ],
  3: [
    "hadWrittenComplaint",
    "writtenDate",
    "gotResponse",
    "responseDate",
    "sentReminder",
    "reminderDate",
    "disputeDate",
    "againstRegulatedEntity",
    "againstBC",
    "panLast4",
    "acctLast4",
    "uploads",
  ],
  4: [
    "serviceType",
    "servicePart",
    "complaintReason",
    "complaintBrief",
    "amountInvolved",
    "compensationRequired",
    "authorizeRep",
    "declarationAccepted",
  ],
};

function isStepComplete(n, d) {
  switch (n) {
    case 1:
      return (
        d.fullName &&
        d.mobile &&
        d.email &&
        d.complainantCategory &&
        d.pin &&
        d.state &&
        d.district &&
        d.address1
      );
    case 2:
      return (
        d.entityName && d.entityState && d.entityDistrict && d.entityBranch
      );
    case 3:
      return (
        d.hadWrittenComplaint &&
        d.writtenDate &&
        d.gotResponse &&
        d.responseDate &&
        d.sentReminder &&
        d.reminderDate &&
        d.disputeDate &&
        d.panLast4 &&
        d.acctLast4
      );
    case 4:
      return (
        d.serviceType &&
        d.servicePart &&
        d.complaintReason &&
        d.amountInvolved &&
        d.compensationRequired &&
        d.declarationAccepted
      );
    default:
      return false;
  }
}

/* ------------------------ Icons for stepper ------------------------ */
const Ic1 = () => <span className="ic ic-user" aria-hidden />;
const Ic2 = () => <span className="ic ic-bank" aria-hidden />;
const Ic3 = () => <span className="ic ic-doc" aria-hidden />;
const Ic4 = () => <span className="ic ic-plus" aria-hidden />;
const Ic5 = () => <span className="ic ic-check" aria-hidden />;

/* ------------------------ Step items ------------------------ */
const stepsMeta = [
  { id: 1, title: "Step 1", sub: "Complainant Details", Icon: Ic1 },
  { id: 2, title: "Step 2", sub: "Entity Details", Icon: Ic2 },
  { id: 3, title: "Step 3", sub: "Complaint Details", Icon: Ic3 },
  { id: 4, title: "Step 4", sub: "Additional Information", Icon: Ic4 },
  { id: 5, title: "Step 5", sub: "Review and Submit", Icon: Ic5 },
];

/* ------------------------ Page ------------------------ */
export default function ComplaintForm() {
  const nav = useNavigate();
  const [data, setData] = useState(initialData);
  const [step, setStep] = useState(1); // 1..5

  const canClickStep = (s) => {
    if (s <= step) return true;
    // Allow clicking a future step only if all previous are complete
    for (let i = 1; i < s; i++) if (!isStepComplete(i, data)) return false;
    return true;
  };

  const goTo = (s) => {
    if (canClickStep(s)) setStep(s);
  };

  const next = () => {
    if (step < 5) setStep(step + 1);
  };

  const resetStep = (n) =>
    setData((d) => {
      const c = { ...d };
      stepKeys[n].forEach((k) => (c[k] = initialData[k]));
      return c;
    });

  const saveProgress = () => alert("Progress saved (demo)");
  const saveAndContinue = () => next();

  const HeaderRight = useMemo(
    () => (
      <div className="cf-id-wrap">
        <span className="cf-id-label">Complaint ID :</span>
        <span className="cf-id-val">AHETY273882D</span>
        <span className="cf-id-info" aria-label="info">
          ⓘ
        </span>
      </div>
    ),
    []
  );

  return (
    <div className="cf2">
      {/* Breadcrumb */}
      <nav className="cf2-breadcrumb" aria-label="Breadcrumb">
        <button className="back-ic" aria-label="Back">
          ←
        </button>
        <div className="bc">Home</div>
        <div className="sep">›</div>
        <div className="bc current">Complaint form</div>
      </nav>

      {/* Title row */}
      <div className="cf2-title-row">
        <h1 className="cf2-title">Complaint Form</h1>
        {HeaderRight}
      </div>

      {/* Stepper */}
      <div className="stepper" role="tablist" aria-label="Steps">
        <div className="stepper-scroll">
          {stepsMeta.map(({ id, title, sub, Icon }) => {
            const completed = id < step ? isStepComplete(id, data) : false;
            const active = id === step;
            const disabled = !canClickStep(id);
            return (
              <button
                key={id}
                role="tab"
                aria-selected={active}
                className={`step ${active ? "active" : ""} ${
                  completed ? "done" : ""
                } ${disabled ? "disabled" : ""}`}
                onClick={() => goTo(id)}
                disabled={disabled}
              >
                <span className="step-icon">{<Icon />}</span>
                <span className="step-text">
                  <span className="step-title">{title}</span>
                  <span className="step-sub">{sub}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Form content + side card */}
      <div className="cf2-body">
        <div className="cf2-main">
          {/* Section heading like figma */}
          <h2 className="section-h">
            {step === 1 && "Your (complainant) details"}
            {step === 2 && "Entity details"}
            {step === 3 && "Complaint details"}
            {step === 4 && "Additional information"}
            {step === 5 && "Review your complaint details"}
            <span className="i" aria-hidden />
          </h2>

          {/* Step bodies */}
          {step === 1 && <Step1Complainant data={data} setData={setData} />}
          {step === 2 && <Step2Entity data={data} setData={setData} />}
          {step === 3 && (
            <Step3ComplaintDetails data={data} setData={setData} />
          )}
          {step === 4 && <Step4AdditionalInfo data={data} setData={setData} />}
          {step === 5 && <ReviewStep data={data} onEdit={(n) => setStep(n)} />}

          {/* Action bar (matches figma: Reset, Save Progress, Save & Continue) */}
          <div className="sticky-actions">
            {step <= 4 ? (
              <>
                <button className="btn outline" onClick={() => resetStep(step)}>
                  Reset
                </button>
                <button className="btn outline" onClick={saveProgress}>
                  Save Progress
                </button>
                <button className="btn primary" onClick={saveAndContinue}>
                  Save and Continue
                </button>
              </>
            ) : (
              <>
                <button className="btn outline" onClick={() => setStep(1)}>
                  Go Back
                </button>
                <button
                  className="btn primary"
                  onClick={() => nav("/complaint/success")}
                >
                  Submit Complaint
                </button>
              </>
            )}
          </div>
        </div>

        {/* Right info card (hidden on small screens) */}
        <aside className="cf2-side">
          <div className="side-card">
            <div className="thumb" />
            <div className="side-caption">Steps to file a complaint</div>
          </div>
        </aside>
      </div>
    </div>
  );
}
