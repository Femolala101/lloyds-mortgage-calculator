import React from "react";

function Step1YourDetails({ onNext }) {
  return (
    <div className="step-container">
      <h2>Step 1: Tell us a bit about yourself</h2>
      <label>Annual Income (£)</label>
      <input type="number" placeholder="Enter your income" />

      <label>Joint Application?</label>
      <div>
        <label><input type="radio" name="joint" /> Yes</label>
        <label><input type="radio" name="joint" /> No</label>
      </div>

      <label>Employment Type</label>
      <select>
        <option value="">Select...</option>
        <option value="full-time">Full-Time</option>
        <option value="part-time">Part-Time</option>
        <option value="self-employed">Self-Employed</option>
      </select>

      <button onClick={onNext}>Next: Property Details</button>
    </div>
  );
}

export default Step1YourDetails;
