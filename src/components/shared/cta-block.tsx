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

  if (!isDark) {
    return (
      <section className="bg-brand-surface py-20 md:py-28">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
            {headline}
          </h2>
          {description && (
            <p className="mx-auto mt-4 max-w-2xl text-body-lg text-brand-gray-light">
              {description}
            </p>
          )}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href={primaryCta.href} variant="primary" size="lg">
              {primaryCta.label}
            </Button>
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="ghost" size="lg">
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-brand-dark py-20 md:py-28">
      {/* Subtle texture — matches homepage hero */}
      <div className="absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full bg-brand-blue/[0.07] blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container-narrow relative text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          {headline}
        </h2>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            {description}
          </p>
        )}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href={primaryCta.href} variant="primary" size="lg">
            {primaryCta.label}
          </Button>
          {secondaryCta && (
            <Button
              href={secondaryCta.href}
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 hover:text-white"
            >
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
