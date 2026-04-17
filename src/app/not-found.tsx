import { Section, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center py-16">
        <p className="text-display-xl text-brand-blue font-bold">404</p>
        <h1 className="mt-4 text-display-lg">Page Not Found</h1>
        <p className="mt-4 text-body-lg text-brand-gray-light">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8">
          <Button href="/" variant="primary" size="lg">
            Back to Home
          </Button>
        </div>
      </div>
    </Section>
  );
}
