const partners = [
  { name: "Microsoft", style: "font-bold tracking-wide" },
  { name: "SentinelOne", style: "font-extrabold tracking-tight" },
  { name: "Datto", style: "font-bold tracking-widest uppercase" },
  { name: "CompTIA", style: "font-black tracking-wide" },
  { name: "SOC 2", style: "font-bold tracking-[0.2em]" },
];

export function TrustBar() {
  return (
    <div className="bg-gradient-to-r from-brand-dark to-brand-dark-light py-8">
      <div className="container-narrow">
        <p className="mb-4 text-center text-xs font-medium uppercase tracking-widest text-white/40">
          Trusted by industry leaders
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {partners.map((partner) => (
            <span
              key={partner.name}
              className={`text-lg text-white/60 transition-colors duration-300 hover:text-white/90 ${partner.style}`}
            >
              {partner.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
