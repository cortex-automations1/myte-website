import type { LucideIcon } from "lucide-react";
import { HeartPulse, Scale, Landmark } from "lucide-react";

export type Industry = {
  name: string;
  icon: LucideIcon;
  challenge: string;
  points: string[];
  compliance: string;
};

export const industries: Industry[] = [
  {
    name: "Healthcare",
    icon: HeartPulse,
    challenge:
      "Patient data is a top target for cybercriminals, and HIPAA violations can cost your practice hundreds of thousands in fines. You need IT that protects PHI without slowing down your clinical workflows.",
    points: [
      "HIPAA-compliant infrastructure and access controls",
      "Encrypted EHR and patient portal management",
      "Security risk assessments and remediation",
      "Staff training on PHI handling and phishing awareness",
    ],
    compliance: "HIPAA",
  },
  {
    name: "Legal",
    icon: Scale,
    challenge:
      "Law firms handle privileged client information that demands the highest level of confidentiality. A breach does not just cost money, it costs your reputation and your license.",
    points: [
      "Privileged communication encryption and DLP",
      "Document management and secure cloud storage",
      "eDiscovery-ready backup and retention policies",
      "ABA ethics-compliant technology practices",
    ],
    compliance: "ABA Ethics Rules",
  },
  {
    name: "Financial Services",
    icon: Landmark,
    challenge:
      "Regulators expect airtight security and you face audits that demand documented proof. One compliance gap can shut down operations or destroy client trust.",
    points: [
      "SOC 2 and PCI-DSS compliance readiness",
      "Multi-factor authentication and zero-trust architecture",
      "Audit trail logging and evidence collection",
      "Secure client portal and data transmission",
    ],
    compliance: "SOC 2 / PCI-DSS",
  },
];
