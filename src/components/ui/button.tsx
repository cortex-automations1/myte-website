import Link from "next/link";

const variantStyles = {
  primary: "bg-brand-blue text-white hover:bg-brand-blue-hover",
  secondary: "bg-brand-dark text-white hover:bg-brand-dark-light",
  outline:
    "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white",
  ghost: "text-brand-blue hover:bg-brand-blue-light",
} as const;

const sizeStyles = {
  sm: "px-4 py-2 text-body-sm",
  md: "px-6 py-3 text-body-md",
  lg: "px-8 py-4 text-body-lg font-medium",
} as const;

type ButtonProps = {
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
  href?: string;
  className?: string;
  children: React.ReactNode;
} & (
  | React.ButtonHTMLAttributes<HTMLButtonElement>
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
);

export function Button({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-brand font-semibold transition-colors duration-200 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
