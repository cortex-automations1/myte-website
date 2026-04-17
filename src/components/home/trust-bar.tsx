const partners = [
  { name: "Microsoft", style: "font-semibold tracking-wide" },
  { name: "SentinelOne", style: "font-bold tracking-tight" },
  { name: "Datto", style: "font-semibold tracking-[0.15em] uppercase text-[13px]" },
  { name: "CompTIA", style: "font-bold tracking-wide" },
  { name: "SOC 2", style: "font-semibold tracking-[0.2em]" },
];

export function TrustBar() {
  return (
    <section className="border-b border-gray-100 bg-white py-10">
      <div className="container-narrow">
        <p className="mb-6 text-center text-body-sm text-brand-gray-light">
          Trusted partnerships and certifications
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {partners.map((partner) => (
            <span
              key={partner.name}
              className={`text-base text-gray-300 ${partner.style}`}
            >
              {partner.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
