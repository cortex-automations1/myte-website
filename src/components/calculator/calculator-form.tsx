"use client";

import { useState, useActionState } from "react";
import {
  submitCalculatorLead,
  type LeadFormState,
} from "@/actions/calculator";
import {
  calculateITCosts,
  type CalculatorInputs,
  type CalculatorResult,
} from "@/lib/calculator";
import { Button } from "@/components/ui";

const steps = [
  "Company Profile",
  "Current Environment",
  "Security & Compliance",
  "Your Results",
];

const employeeRanges = ["1-10", "11-25", "26-50", "51-100", "100+"];

const industries = [
  "Healthcare",
  "Legal",
  "Financial Services",
  "Professional Services",
  "Manufacturing",
  "Retail",
  "Nonprofit",
  "Other",
];

const itSetups = [
  "In-house IT team",
  "Outsourced",
  "Hybrid",
  "No dedicated IT",
];

const cloudOptions = ["Microsoft 365", "Google Workspace", "Other", "None"];

const spendRanges = [
  "Under $1,000",
  "$1,000 - $2,500",
  "$2,500 - $5,000",
  "$5,000 - $10,000",
  "Over $10,000",
  "Not sure",
];

const complianceOptions = [
  "HIPAA",
  "PCI-DSS",
  "SOC2",
  "CMMC",
  "None",
  "Not sure",
];

const inputClasses =
  "w-full rounded-brand border border-gray-200 px-4 py-3 text-body-md text-brand-gray focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-colors";

const buttonGroupBase =
  "rounded-brand border px-4 py-2 text-body-sm transition-colors cursor-pointer";
const buttonGroupActive =
  "border-brand-blue bg-brand-blue text-white";
const buttonGroupInactive =
  "border-gray-200 bg-white text-brand-gray hover:border-brand-blue";

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function ProgressBar({ currentStep }: { currentStep: number }) {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between">
        {steps.map((label, index) => (
          <div key={label} className="flex flex-1 items-center">
            <div className="flex flex-col items-center flex-1">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-body-sm font-semibold transition-colors ${
                  index <= currentStep
                    ? "bg-brand-blue text-white"
                    : "bg-gray-200 text-brand-gray-light"
                }`}
              >
                {index + 1}
              </div>
              <span
                className={`mt-2 text-center text-body-sm hidden sm:block ${
                  index <= currentStep
                    ? "font-medium text-brand-blue"
                    : "text-brand-gray-light"
                }`}
              >
                {label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`h-0.5 w-full mx-2 ${
                  index < currentStep ? "bg-brand-blue" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ButtonGroup({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={`${buttonGroupBase} ${
            value === option ? buttonGroupActive : buttonGroupInactive
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

function MultiSelectGroup({
  options,
  values,
  onChange,
}: {
  options: string[];
  values: string[];
  onChange: (values: string[]) => void;
}) {
  const toggle = (option: string) => {
    if (option === "None" || option === "Not sure") {
      onChange([option]);
      return;
    }
    const filtered = values.filter((v) => v !== "None" && v !== "Not sure");
    if (filtered.includes(option)) {
      onChange(filtered.filter((v) => v !== option));
    } else {
      onChange([...filtered, option]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => toggle(option)}
          className={`${buttonGroupBase} ${
            values.includes(option) ? buttonGroupActive : buttonGroupInactive
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

function YesNoGroup({
  value,
  onChange,
}: {
  value: boolean | null;
  onChange: (value: boolean) => void;
}) {
  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={() => onChange(true)}
        className={`${buttonGroupBase} ${
          value === true ? buttonGroupActive : buttonGroupInactive
        }`}
      >
        Yes
      </button>
      <button
        type="button"
        onClick={() => onChange(false)}
        className={`${buttonGroupBase} ${
          value === false ? buttonGroupActive : buttonGroupInactive
        }`}
      >
        No
      </button>
    </div>
  );
}

function ResultsDisplay({ result }: { result: CalculatorResult }) {
  return (
    <div className="space-y-8">
      {/* Estimated Range */}
      <div className="rounded-brand bg-brand-blue-light p-8 text-center">
        <p className="text-body-md text-brand-gray-light">
          Estimated Monthly IT Investment
        </p>
        <p className="mt-2 text-display-lg font-bold text-brand-blue">
          {formatCurrency(result.estimatedMonthly.low)} &ndash;{" "}
          {formatCurrency(result.estimatedMonthly.high)}/mo
        </p>
        <p className="mt-2 text-body-sm text-brand-gray-light">
          Industry average: {formatCurrency(result.industryAverage)}/mo
        </p>
      </div>

      {/* Cost Breakdown */}
      <div>
        <h3 className="text-display-sm">Cost Breakdown</h3>
        <div className="mt-4 space-y-4">
          {result.breakdown.map((item) => (
            <div
              key={item.category}
              className="flex items-center justify-between rounded-brand border border-gray-200 px-5 py-4"
            >
              <div>
                <p className="font-medium text-brand-dark">{item.category}</p>
                <p className="text-body-sm text-brand-gray-light">
                  {item.description}
                </p>
              </div>
              <p className="shrink-0 text-body-md font-semibold text-brand-dark">
                {formatCurrency(item.low)} &ndash; {formatCurrency(item.high)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendation */}
      <div className="rounded-brand border-l-4 border-brand-blue bg-brand-surface p-6">
        <h3 className="text-body-lg font-semibold text-brand-dark">
          Our Recommendation
        </h3>
        <p className="mt-2 text-body-md text-brand-gray-light">
          {result.recommendation}
        </p>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Button href="/contact" size="lg">
          Schedule a Free 15-Minute Call
        </Button>
      </div>
    </div>
  );
}

const initialLeadState: LeadFormState = { success: false };

export function CalculatorForm() {
  const [step, setStep] = useState(0);

  // Step 1 - Company Profile
  const [employees, setEmployees] = useState("");
  const [industry, setIndustry] = useState("");
  const [currentSetup, setCurrentSetup] = useState("");

  // Step 2 - Current Environment
  const [workstations, setWorkstations] = useState<number>(0);
  const [cloudServices, setCloudServices] = useState("");
  const [hasServers, setHasServers] = useState<boolean | null>(null);
  const [currentSpend, setCurrentSpend] = useState("");

  // Step 3 - Security & Compliance
  const [compliance, setCompliance] = useState<string[]>([]);
  const [hadIncident, setHadIncident] = useState<boolean | null>(null);
  const [hasDisasterRecovery, setHasDisasterRecovery] = useState<boolean | null>(null);

  // Step 4 - Results
  const [result, setResult] = useState<CalculatorResult | null>(null);
  const [leadState, leadAction, isLeadPending] = useActionState(
    submitCalculatorLead,
    initialLeadState,
  );

  const handleCalculate = () => {
    const inputs: CalculatorInputs = {
      employees,
      industry,
      currentSetup,
      workstations,
      cloudServices,
      hasServers: hasServers ?? false,
      currentSpend,
      compliance,
      hadIncident: hadIncident ?? false,
      hasDisasterRecovery: hasDisasterRecovery ?? false,
    };
    setResult(calculateITCosts(inputs));
    setStep(3);
  };

  const canProceed = (s: number): boolean => {
    switch (s) {
      case 0:
        return employees !== "" && industry !== "" && currentSetup !== "";
      case 1:
        return (
          workstations > 0 &&
          cloudServices !== "" &&
          hasServers !== null &&
          currentSpend !== ""
        );
      case 2:
        return (
          compliance.length > 0 &&
          hadIncident !== null &&
          hasDisasterRecovery !== null
        );
      default:
        return false;
    }
  };

  return (
    <div className="mx-auto max-w-3xl">
      <ProgressBar currentStep={step} />

      {/* Step 1: Company Profile */}
      {step === 0 && (
        <div className="space-y-8">
          <div>
            <label className="mb-3 block text-body-sm font-medium text-brand-dark">
              How many employees does your company have?
            </label>
            <ButtonGroup
              options={employeeRanges}
              value={employees}
              onChange={setEmployees}
            />
          </div>
          <div>
            <label
              htmlFor="industry"
              className="mb-1.5 block text-body-sm font-medium text-brand-dark"
            >
              What industry are you in?
            </label>
            <select
              id="industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className={inputClasses}
            >
              <option value="" disabled>
                Select your industry...
              </option>
              {industries.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-3 block text-body-sm font-medium text-brand-dark">
              What is your current IT setup?
            </label>
            <ButtonGroup
              options={itSetups}
              value={currentSetup}
              onChange={setCurrentSetup}
            />
          </div>
        </div>
      )}

      {/* Step 2: Current Environment */}
      {step === 1 && (
        <div className="space-y-8">
          <div>
            <label
              htmlFor="workstations"
              className="mb-1.5 block text-body-sm font-medium text-brand-dark"
            >
              How many workstations/devices do you have?
            </label>
            <input
              id="workstations"
              type="number"
              min={1}
              value={workstations || ""}
              onChange={(e) => setWorkstations(Number(e.target.value))}
              className={inputClasses}
              placeholder="e.g. 15"
            />
          </div>
          <div>
            <label className="mb-3 block text-body-sm font-medium text-brand-dark">
              What cloud services do you use?
            </label>
            <ButtonGroup
              options={cloudOptions}
              value={cloudServices}
              onChange={setCloudServices}
            />
          </div>
          <div>
            <label className="mb-3 block text-body-sm font-medium text-brand-dark">
              Do you have on-premises servers?
            </label>
            <YesNoGroup value={hasServers} onChange={setHasServers} />
          </div>
          <div>
            <label
              htmlFor="currentSpend"
              className="mb-1.5 block text-body-sm font-medium text-brand-dark"
            >
              What is your current monthly IT spend?
            </label>
            <select
              id="currentSpend"
              value={currentSpend}
              onChange={(e) => setCurrentSpend(e.target.value)}
              className={inputClasses}
            >
              <option value="" disabled>
                Select a range...
              </option>
              {spendRanges.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Step 3: Security & Compliance */}
      {step === 2 && (
        <div className="space-y-8">
          <div>
            <label className="mb-3 block text-body-sm font-medium text-brand-dark">
              Do you have any compliance requirements?
            </label>
            <MultiSelectGroup
              options={complianceOptions}
              values={compliance}
              onChange={setCompliance}
            />
          </div>
          <div>
            <label className="mb-3 block text-body-sm font-medium text-brand-dark">
              Have you experienced a security incident in the past 12 months?
            </label>
            <YesNoGroup value={hadIncident} onChange={setHadIncident} />
          </div>
          <div>
            <label className="mb-3 block text-body-sm font-medium text-brand-dark">
              Do you have a disaster recovery plan in place?
            </label>
            <YesNoGroup
              value={hasDisasterRecovery}
              onChange={setHasDisasterRecovery}
            />
          </div>
        </div>
      )}

      {/* Step 4: Results */}
      {step === 3 && (
        <div>
          {!leadState.success ? (
            <div className="space-y-6">
              <div className="rounded-brand bg-brand-surface p-8 text-center">
                <h3 className="text-display-sm text-brand-dark">
                  Your estimate is ready!
                </h3>
                <p className="mt-2 text-body-md text-brand-gray-light">
                  Enter your details below to see your personalized IT cost
                  breakdown.
                </p>
              </div>
              <form action={leadAction} className="space-y-6">
                {leadState.error && (
                  <div className="rounded-brand border border-red-200 bg-red-50 px-4 py-3 text-body-sm text-red-600">
                    {leadState.error}
                  </div>
                )}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="lead-name"
                      className="mb-1.5 block text-body-sm font-medium text-brand-dark"
                    >
                      Name
                    </label>
                    <input
                      id="lead-name"
                      name="name"
                      type="text"
                      required
                      className={inputClasses}
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lead-email"
                      className="mb-1.5 block text-body-sm font-medium text-brand-dark"
                    >
                      Email
                    </label>
                    <input
                      id="lead-email"
                      name="email"
                      type="email"
                      required
                      className={inputClasses}
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="lead-company"
                      className="mb-1.5 block text-body-sm font-medium text-brand-dark"
                    >
                      Company
                    </label>
                    <input
                      id="lead-company"
                      name="company"
                      type="text"
                      required
                      className={inputClasses}
                      placeholder="Acme Inc."
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lead-phone"
                      className="mb-1.5 block text-body-sm font-medium text-brand-dark"
                    >
                      Phone{" "}
                      <span className="text-brand-gray-light">(optional)</span>
                    </label>
                    <input
                      id="lead-phone"
                      name="phone"
                      type="tel"
                      className={inputClasses}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isLeadPending}
                >
                  {isLeadPending ? "Submitting..." : "See My Results"}
                </Button>
              </form>
            </div>
          ) : (
            result && <ResultsDisplay result={result} />
          )}
        </div>
      )}

      {/* Navigation */}
      {step < 3 && (
        <div className="mt-10 flex justify-between">
          <Button
            variant="ghost"
            onClick={() => setStep((s) => s - 1)}
            disabled={step === 0}
            className={step === 0 ? "invisible" : ""}
          >
            Back
          </Button>
          {step < 2 ? (
            <Button
              onClick={() => setStep((s) => s + 1)}
              disabled={!canProceed(step)}
            >
              Next
            </Button>
          ) : (
            <Button onClick={handleCalculate} disabled={!canProceed(step)}>
              Calculate
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
