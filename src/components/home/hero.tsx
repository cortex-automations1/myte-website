import { Button } from "@/components/ui";
import { NetworkMesh } from "./network-mesh";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-32">
      <NetworkMesh />
      <div className="container-narrow relative">
        <div className="max-w-2xl">
          <h1 className="text-display-xl font-bold">
            Enterprise IT Security.
            <br />
            <span className="text-brand-blue">Personal Service.</span>
          </h1>
          <p className="mt-6 text-body-lg text-brand-gray-light">
            Your business deserves IT that is proactive, secure, and built
            around the way you work. MYTE Technology gives growing companies
            the same caliber of IT and cybersecurity that enterprises rely
            on — with the responsiveness and care of a dedicated partner.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">
              Get a Free Consultation
            </Button>
            <Button href="/calculator" variant="outline" size="lg">
              See What You Should Be Spending
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
