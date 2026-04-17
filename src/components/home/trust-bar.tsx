const partners = ["Microsoft", "SentinelOne", "Datto", "CompTIA", "SOC 2"];

export function TrustBar() {
  return (
    <div className="border-y border-gray-200 bg-brand-surface py-6">
      <div className="container-narrow">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {partners.map((name) => (
            <span
              key={name}
              className="text-body-sm font-semibold uppercase tracking-widest text-gray-400"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
