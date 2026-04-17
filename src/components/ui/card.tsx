type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  accentTop?: boolean;
};

export function Card({
  children,
  className = "",
  hover = false,
  accentTop = false,
}: CardProps) {
  return (
    <div
      className={`rounded-brand bg-white p-6 shadow-card ${
        hover ? "transition-shadow duration-200 hover:shadow-card-hover" : ""
      } ${accentTop ? "border-t-4 border-brand-blue" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
