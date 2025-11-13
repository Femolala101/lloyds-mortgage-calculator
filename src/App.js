import React, { useState } from "react";
import Step1YourDetails from "./components/Step1YourDetails";
import Step2PropertyDetails from "./components/Step2PropertyDetails";
import Step3MortgageOptions from "./components/Step3MortgageOptions";
import Step4Results from "./components/Step4Results";

function App() {
  const [step, setStep] = useState(1);

  //  This stores all user inputs from Steps 1–3
  const [formData, setFormData] = useState({
    loanAmount: "",
    interestRate: "",
    termYears: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="App">
      <h1>Lloyds Mortgage Calculator</h1>

      {step === 1 && (
        <Step1YourDetails
          onNext={nextStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {step === 2 && (
        <Step2PropertyDetails
          onNext={nextStep}
          onBack={prevStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {step === 3 && (
        <Step3MortgageOptions
          onNext={nextStep}
          onBack={prevStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {step === 4 && (
        <Step4Results
          onBack={prevStep}
          loanAmount={parseFloat(formData.loanAmount)}
          interestRate={parseFloat(formData.interestRate)}
          termYears={parseFloat(formData.termYears)}
        />
      )}
    </div>
  );
}

export default App;
