export type CalculatorInputs = {
  employees: string;
  industry: string;
  currentSetup: string;
  workstations: number;
  cloudServices: string;
  hasServers: boolean;
  currentSpend: string;
  compliance: string[];
  hadIncident: boolean;
  hasDisasterRecovery: boolean;
};

export type CalculatorResult = {
  estimatedMonthly: { low: number; high: number };
  breakdown: {
    category: string;
    low: number;
    high: number;
    description: string;
  }[];
  industryAverage: number;
  recommendation: string;
};

const employeeMultiplier: Record<string, number> = {
  "1-10": 1,
  "11-25": 2.2,
  "26-50": 4,
  "51-100": 7,
  "100+": 12,
};

const BASE_PER_USER_COST = 150;

export function calculateITCosts(inputs: CalculatorInputs): CalculatorResult {
  const multiplier = employeeMultiplier[inputs.employees] ?? 1;
  const baseCost = BASE_PER_USER_COST * multiplier;

  const hasCompliance =
    inputs.compliance.length > 0 &&
    !inputs.compliance.includes("None") &&
    !inputs.compliance.includes("Not sure");

  // Support: 0.4-0.6x base
  const supportLow = baseCost * 0.4;
  const supportHigh = baseCost * 0.6;

  // Security: 0.25-0.4x base, +40% if compliance, +30% if incident
  let securityLow = baseCost * 0.25;
  let securityHigh = baseCost * 0.4;
  if (hasCompliance) {
    securityLow *= 1.4;
    securityHigh *= 1.4;
  }
  if (inputs.hadIncident) {
    securityLow *= 1.3;
    securityHigh *= 1.3;
  }

  // Cloud/Infra: 0.15-0.25x base, +20% if servers
  let infraLow = baseCost * 0.15;
  let infraHigh = baseCost * 0.25;
  if (inputs.hasServers) {
    infraLow *= 1.2;
    infraHigh *= 1.2;
  }

  // Backup/DR: 0.1-0.15x base, 0.8x if has DR else 1.2x
  const drMultiplier = inputs.hasDisasterRecovery ? 0.8 : 1.2;
  const backupLow = baseCost * 0.1 * drMultiplier;
  const backupHigh = baseCost * 0.15 * drMultiplier;

  const breakdown = [
    {
      category: "IT Support & Management",
      low: Math.round(supportLow),
      high: Math.round(supportHigh),
      description: "Help desk, monitoring, maintenance, and vendor management",
    },
    {
      category: "Security & Compliance",
      low: Math.round(securityLow),
      high: Math.round(securityHigh),
      description:
        "Endpoint protection, threat monitoring, and compliance controls",
    },
    {
      category: "Cloud & Infrastructure",
      low: Math.round(infraLow),
      high: Math.round(infraHigh),
      description: "Cloud services, networking, and server management",
    },
    {
      category: "Backup & Disaster Recovery",
      low: Math.round(backupLow),
      high: Math.round(backupHigh),
      description: "Data backup, recovery planning, and business continuity",
    },
  ];

  const totalLow = breakdown.reduce((sum, item) => sum + item.low, 0);
  const totalHigh = breakdown.reduce((sum, item) => sum + item.high, 0);

  const industryAverage = Math.round(((totalLow + totalHigh) / 2) * 1.15);

  let recommendation: string;
  if (!inputs.hasDisasterRecovery) {
    recommendation =
      "Your organization lacks a disaster recovery plan. This is the single biggest risk to business continuity. We recommend starting with a comprehensive DR assessment and implementing automated backups with tested recovery procedures.";
  } else if (inputs.hadIncident) {
    recommendation =
      "Given your recent security incident, we recommend a thorough security assessment to identify vulnerabilities and implement stronger protections. A proactive managed security approach can prevent future incidents and reduce long-term costs.";
  } else if (hasCompliance) {
    recommendation =
      "With your compliance requirements, maintaining proper controls is essential. We recommend a compliance-focused IT strategy that keeps you audit-ready while optimizing costs through automation and centralized management.";
  } else {
    recommendation =
      "Your organization would benefit from a balanced managed IT approach that covers proactive monitoring, security fundamentals, and reliable backups. This prevents costly emergencies and keeps your team productive.";
  }

  return {
    estimatedMonthly: { low: totalLow, high: totalHigh },
    breakdown,
    industryAverage,
    recommendation,
  };
}
