import {
  Hero,
  TrustBar,
  ProblemSolution,
  ServicesOverview,
  CalculatorPromo,
  SocialProof,
  IndustriesTeaser,
} from "@/components/home";
import { CtaBlock } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemSolution />
      <ServicesOverview />
      <CalculatorPromo />
      <SocialProof />
      <IndustriesTeaser />
      <CtaBlock
        headline="Ready to Stop Worrying About IT?"
        description="Get a free consultation to see how MYTE can protect your business, reduce costs, and give you the peace of mind you deserve."
        primaryCta={{ label: "Get a Free Consultation", href: "/contact" }}
        secondaryCta={{
          label: "Try the IT Cost Calculator",
          href: "/calculator",
        }}
      />
    </>
  );
}
