import { Button } from "@/components/ui";

type CtaBlockProps = {
  headline: string;
  description?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  background?: "light" | "dark";
};

export function CtaBlock({
  headline,
  description,
  primaryCta,
  secondaryCta,
  background = "dark",
}: CtaBlockProps) {
  const isDark = background === "dark";

  return (
    <section
      className={`section-padding ${isDark ? "bg-brand-dark" : "bg-brand-surface"}`}
    >
      <div className="container-narrow text-center">
        <h2
          className={`text-display-md md:text-display-lg ${isDark ? "text-white" : ""}`}
        >
          {headline}
        </h2>
        {description && (
          <p
            className={`mx-auto mt-4 max-w-2xl text-body-lg ${isDark ? "text-gray-300" : "text-brand-gray-light"}`}
          >
            {description}
          </p>
        )}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            href={primaryCta.href}
            variant={isDark ? "primary" : "primary"}
            size="lg"
          >
            {primaryCta.label}
          </Button>
          {secondaryCta && (
            <Button
              href={secondaryCta.href}
              variant={isDark ? "outline" : "ghost"}
              size="lg"
            >
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
