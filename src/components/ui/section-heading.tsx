type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
};

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2
        className={`text-display-md md:text-display-lg ${
          light ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-body-lg ${
            centered ? "mx-auto" : ""
          } ${light ? "text-gray-300" : "text-brand-gray-light"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
