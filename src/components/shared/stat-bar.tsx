type StatBarProps = {
  stats: { value: string; label: string }[];
  light?: boolean;
};

export function StatBar({ stats, light = false }: StatBarProps) {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div
            className={`text-display-md font-bold ${light ? "text-white" : "text-brand-blue"}`}
          >
            {stat.value}
          </div>
          <div
            className={`mt-1 text-body-sm ${light ? "text-gray-300" : "text-brand-gray-light"}`}
          >
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
