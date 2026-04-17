import type { LucideIcon } from "lucide-react";
import { Monitor, Shield, Cloud, LineChart } from "lucide-react";

export type Service = {
  title: string;
  slug: string;
  icon: LucideIcon;
  shortDescription: string;
  description: string;
  painPoints: string[];
  approach: string[];
  included: string[];
  faq: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    title: "Managed IT Services",
    slug: "managed-it",
    icon: Monitor,
    shortDescription:
      "Proactive helpdesk, device management, and infrastructure monitoring so your team stays productive and your systems stay running.",
    description:
      "Your business depends on technology that works. MYTE's managed IT services give you a dedicated team that monitors, maintains, and supports your entire IT environment around the clock. We handle the complexity so you can focus on running your business.",
    painPoints: [
      "Your current IT provider takes hours to respond to critical issues, and your team loses productive time waiting for fixes that should take minutes.",
      "You are constantly putting out fires instead of getting ahead. Servers crash, printers jam, and nobody seems to have a plan to prevent problems before they happen.",
      "You have no idea if your technology is actually set up correctly or if you are paying for things you do not need. There is no roadmap, no accountability, and no clear answers.",
    ],
    approach: [
      "We start with a comprehensive audit of your entire IT environment to identify vulnerabilities, inefficiencies, and quick wins.",
      "We deploy our monitoring stack across all endpoints, servers, and network devices so we catch problems before your team even notices them.",
      "Every client gets a dedicated account manager who knows your business, your team, and your technology inside and out.",
      "We provide monthly reporting that shows you exactly what we did, what we prevented, and where we recommend investing next.",
    ],
    included: [
      "24/7 helpdesk with guaranteed 15-minute response time",
      "Proactive monitoring and patch management for all devices",
      "On-site and remote support from certified technicians",
      "Vendor management for all your technology providers",
      "Quarterly business reviews with actionable recommendations",
      "Employee onboarding and offboarding IT setup",
    ],
    faq: [
      {
        question: "How fast do you respond to support tickets?",
        answer:
          "Our average response time is under 15 minutes during business hours. Critical issues are escalated immediately. After hours, our on-call team responds within 30 minutes for emergencies.",
      },
      {
        question: "Can you support our remote and hybrid workers?",
        answer:
          "Absolutely. We manage remote devices, VPN configurations, cloud application access, and provide the same level of support whether your team is in the office or working from home.",
      },
      {
        question: "What happens during the transition from our current provider?",
        answer:
          "We handle the entire migration with a dedicated onboarding project manager. We document everything, transfer credentials securely, and run parallel support during the transition so there is zero downtime.",
      },
      {
        question: "Do you charge extra for on-site visits?",
        answer:
          "No. On-site support is included in all our managed IT plans. We believe if a problem requires hands-on attention, you should not have to think twice about calling us.",
      },
    ],
  },
  {
    title: "Cybersecurity",
    slug: "cybersecurity",
    icon: Shield,
    shortDescription:
      "Enterprise-grade threat detection, SOC monitoring, and incident response to protect your business from breaches and ransomware.",
    description:
      "Cyberattacks are not just a big-company problem anymore. Small and mid-sized businesses are the number one target for ransomware, phishing, and data breaches. MYTE delivers layered security that protects your business, your clients, and your reputation without the cost of building an in-house security team.",
    painPoints: [
      "You know cybersecurity is important, but you have no idea where you actually stand. Are your defenses strong enough? Would you even know if someone was already inside your network?",
      "A single ransomware attack could shut your business down for days or weeks. You cannot afford the downtime, the ransom, or the damage to client trust.",
      "You have compliance requirements but no clear path to meeting them. Auditors are asking questions you cannot answer, and you are worried about fines or lost contracts.",
    ],
    approach: [
      "We run a full security assessment to identify gaps in your defenses and give you a clear risk score with prioritized recommendations.",
      "We deploy layered protection across email, endpoints, network, and cloud with 24/7 SOC monitoring from our certified security analysts.",
      "We build and test your incident response plan so if something does happen, your team knows exactly what to do in the first critical minutes.",
      "We provide ongoing security awareness training for your staff because the best technology in the world cannot stop an employee from clicking the wrong link.",
    ],
    included: [
      "24/7 Security Operations Center monitoring and alerting",
      "Endpoint detection and response on all devices",
      "Email security with advanced phishing protection",
      "Dark web monitoring for compromised credentials",
      "Security awareness training and simulated phishing",
      "Incident response planning and tabletop exercises",
    ],
    faq: [
      {
        question: "How is this different from just having antivirus software?",
        answer:
          "Antivirus is one layer. Modern threats require endpoint detection and response, email filtering, network monitoring, dark web scanning, and trained analysts watching for suspicious behavior 24/7. We provide the full stack.",
      },
      {
        question: "Can you help us pass a compliance audit?",
        answer:
          "Yes. We have helped businesses achieve and maintain compliance with HIPAA, SOC 2, PCI-DSS, and CMMC. We provide the technical controls, documentation, and evidence collection that auditors require.",
      },
      {
        question: "What happens if we actually get breached?",
        answer:
          "Our incident response team activates immediately to contain the threat, preserve evidence, and restore operations. We handle communication, remediation, and post-incident review so you can focus on your business while we handle the crisis.",
      },
    ],
  },
  {
    title: "Cloud Solutions",
    slug: "cloud",
    icon: Cloud,
    shortDescription:
      "Strategic cloud migration, Microsoft 365 management, and Azure/AWS optimization to modernize your infrastructure and cut costs.",
    description:
      "Moving to the cloud is not just about hosting files somewhere else. Done right, it transforms how your team collaborates, scales your infrastructure on demand, and eliminates the capital expense of aging hardware. MYTE designs and manages cloud environments that actually deliver on that promise.",
    painPoints: [
      "Your servers are aging, maintenance costs are climbing, and you know you need to move to the cloud. But the migration feels overwhelming, risky, and easy to get wrong.",
      "You are already paying for Microsoft 365 or cloud services but you are barely using half the features. Your team is not trained on the tools, and you are not getting the return on investment.",
      "Your cloud costs keep climbing and nobody can explain why. You have no visibility into what is running, what is wasted, and whether your architecture is actually right for your workload.",
    ],
    approach: [
      "We assess your current environment and design a migration roadmap that minimizes risk and downtime with clear milestones and rollback plans.",
      "We execute the migration in phases, testing thoroughly at each stage and keeping your team informed every step of the way.",
      "We optimize your cloud architecture for performance and cost, eliminating waste and right-sizing resources to match your actual usage.",
      "We manage your cloud environment ongoing, handling updates, security, backups, and scaling so you never have to worry about the infrastructure underneath.",
    ],
    included: [
      "Cloud readiness assessment and migration planning",
      "Microsoft 365 deployment, configuration, and optimization",
      "Azure and AWS infrastructure design and management",
      "Cloud backup and disaster recovery configuration",
      "Cost optimization and monthly spend reporting",
      "User training and adoption support for cloud tools",
    ],
    faq: [
      {
        question: "How long does a typical cloud migration take?",
        answer:
          "It depends on complexity, but most small business migrations take 4 to 8 weeks. We plan meticulously, migrate in phases, and schedule major cutovers for off-hours to minimize disruption to your team.",
      },
      {
        question: "Will moving to the cloud actually save us money?",
        answer:
          "In most cases, yes. You eliminate hardware refresh cycles, reduce energy costs, and only pay for what you use. We provide a detailed cost comparison before migration so you can see the numbers before committing.",
      },
      {
        question: "What about our data security in the cloud?",
        answer:
          "Cloud platforms like Azure and AWS meet the highest security standards in the world. We layer on additional protections including encryption, access controls, multi-factor authentication, and continuous monitoring to keep your data secure.",
      },
      {
        question: "Can you manage our existing Microsoft 365 environment?",
        answer:
          "Absolutely. We take over administration, optimize your licensing to eliminate waste, configure security policies, and train your team to get more value from the tools you are already paying for.",
      },
    ],
  },
  {
    title: "IT Consulting & Strategy",
    slug: "consulting",
    icon: LineChart,
    shortDescription:
      "Virtual CIO services, technology roadmapping, and IT budgeting that align your technology investments with your business goals.",
    description:
      "Technology decisions should drive your business forward, not hold it back. MYTE's IT consulting services give you access to senior-level strategic guidance without the six-figure salary. We become your technology partner, aligning every IT dollar with your growth objectives.",
    painPoints: [
      "You are making technology decisions based on gut feeling or vendor sales pitches instead of a clear strategy tied to your business goals. Every purchase feels like a gamble.",
      "Your IT budget is a black box. You do not know if you are spending too much, too little, or in the wrong places. You need a partner who can translate technology into business outcomes.",
      "You are growing fast and your technology cannot keep up. Systems that worked for 20 employees are breaking down at 50, and you need a plan to scale without starting over.",
    ],
    approach: [
      "We start with a deep-dive into your business objectives, growth plans, and current technology landscape to understand where you are and where you need to go.",
      "We build a three-year technology roadmap with quarterly milestones, budget projections, and clear priorities so you always know what comes next and why.",
      "We attend your leadership meetings as your virtual CIO, translating technical complexity into business language and ensuring technology decisions support your strategy.",
      "We review and optimize vendor contracts, negotiate on your behalf, and ensure every technology investment delivers measurable return.",
    ],
    included: [
      "Virtual CIO strategic advisory services",
      "Three-year technology roadmap with annual updates",
      "Annual IT budget planning and quarterly reviews",
      "Vendor evaluation, negotiation, and management",
      "Technology due diligence for mergers and acquisitions",
      "Board-ready reporting and executive briefings",
    ],
    faq: [
      {
        question: "What is a virtual CIO and how is it different from a consultant?",
        answer:
          "A virtual CIO is an ongoing strategic partner, not a one-time engagement. We attend your leadership meetings, know your business intimately, and provide continuous guidance. Think of it as having a chief technology officer on your team at a fraction of the cost.",
      },
      {
        question: "How do you determine the right IT budget for our business?",
        answer:
          "We benchmark your spending against industry standards, assess your current needs and growth trajectory, and build a budget that balances security, productivity, and innovation. Most businesses should invest 4 to 7 percent of revenue in technology.",
      },
      {
        question: "Can you help if we are going through a merger or acquisition?",
        answer:
          "Yes. We provide technology due diligence for acquisitions, integration planning for mergers, and system consolidation to eliminate redundancy and reduce costs after the deal closes.",
      },
    ],
  },
];
