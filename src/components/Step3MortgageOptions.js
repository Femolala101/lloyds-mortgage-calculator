import React from "react";

export default function Step3MortgageOptions({ onNext, onBack, formData, setFormData }) {
  return (
    <div className="step-container">
      <h2>Step 3: Mortgage Options</h2>

      <label>Interest Rate (%)</label>
      <input
        type="number"
        step="0.01"
        placeholder="Enter interest rate"
        value={formData.interestRate}
        onChange={(e) =>
          setFormData({ ...formData, interestRate: e.target.value })
        }
      />

      <div className="button-row">
        <button onClick={onBack}>Back</button>
        <button onClick={onNext}>See Results</button>
      </div>
    </div>
  );
}
