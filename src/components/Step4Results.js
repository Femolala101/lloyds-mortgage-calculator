import React from "react";

function Step4Results({ loanAmount, interestRate, termYears, onBack }) {
  const principal = loanAmount;
  const monthlyRate = interestRate / 100 / 12;
  const totalPayments = termYears * 12;

  const monthlyPayment =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
    (Math.pow(1 + monthlyRate, totalPayments) - 1);

  return (
    <div className="step step4">
      <h2>Estimated Monthly Payment</h2>
      <p>
        Based on your inputs, your estimated monthly payment is:
        <strong> £{monthlyPayment.toFixed(2)}</strong>
      </p>

      <button onClick={onBack}>Back</button>
    </div>
  );
}

export default Step4Results;
