const backgroundStyles = {
  white: "bg-white",
  light: "bg-brand-surface",
  dark: "bg-brand-dark text-white",
} as const;

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  background?: keyof typeof backgroundStyles;
  id?: string;
};

export function Section({
  children,
  className = "",
  background = "white",
  id,
}: SectionProps) {
  return (
    <section id={id} className={`section-padding ${backgroundStyles[background]} ${className}`}>
      <div className="container-narrow">{children}</div>
    </section>
  );
}
