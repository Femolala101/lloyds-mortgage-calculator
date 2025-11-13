import React from "react";

export default function Step2PropertyDetails({ onNext, onBack, formData, setFormData }) {
  return (
    <div className="step-container">
      <h2>Step 2: Property Details</h2>

      <label>Property Value (£)</label>
      <input
        type="number"
        placeholder="Enter property value"
        value={formData.loanAmount}
        onChange={(e) =>
          setFormData({ ...formData, loanAmount: e.target.value })
        }
      />

      <label>Loan Term (Years)</label>
      <input
        type="number"
        placeholder="e.g. 25"
        value={formData.termYears}
        onChange={(e) =>
          setFormData({ ...formData, termYears: e.target.value })
        }
      />

      <div className="button-row">
        <button onClick={onBack}>Back</button>
        <button onClick={onNext}>Next: Mortgage Options</button>
      </div>
    </div>
  );
}
