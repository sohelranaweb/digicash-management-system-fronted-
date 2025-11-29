import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Personal Starter",
    price: "Free",
    period: "forever",
    description:
      "Perfect for students and casual users sending money to friends.",
    features: [
      "Send money for free (up to 5k BDT)",
      "Cash out at 1.85% fee",
      "Mobile recharge",
      "Basic transaction history",
      "24/7 In-app support",
    ],
    cta: "Get Started",
    ctaVariant: "default" as const,
    popular: false,
  },
  {
    name: "Pro",
    price: "/month",
    period: "",
    description: "For power users who need higher limits and lower fees.",
    features: [
      "Send money free (unlimited)",
      "Cash out at 1.5% fee",
      "Priority support",
      "Detailed spending analytics",
      "Virtual Visa card included",
      "Bill payments (0 fees)",
    ],
    cta: "Upgrade to Pro",
    ctaVariant: "default" as const,
    popular: true,
  },
  {
    name: "Merchant",
    price: "per transaction",
    period: "",
    description: "Accept payments for your shop or online business securely.",
    features: [
      "Accept QR payments",
      "Payment gateway integration",
      "Merchant dashboard",
      "Employee sub-accounts",
      "Next-day settlement",
      "Dedicated account manager",
    ],
    cta: "Become a Merchant",
    ctaVariant: "default" as const,
    popular: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations and platforms.",
    features: [
      "Custom API integration",
      "Bulk disbursements",
      "Custom transaction limits",
      "SLA guarantees",
      "On-premise deployment options",
      "White-label solutions",
    ],
    cta: "Contact Sales",
    ctaVariant: "default" as const,
    popular: false,
  },
];

export default function PricingCard() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground">
            Choose the plan that fits your needs. Always know what you'll pay.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl bg-card text-card-foreground shadow-lg ring-1 ring-border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                plan.popular
                  ? "ring-2 ring-primary shadow-primary/10 lg:scale-105"
                  : ""
              }`}
            >
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground font-semibold px-4 py-1">
                    MOST POPULAR
                  </Badge>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold tracking-tight">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="ml-2 text-muted-foreground">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-sm sm:text-base text-muted-foreground">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-10">
                  <Button
                    size="lg"
                    className={`w-full font-semibold transition-all ${
                      plan.popular
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                        : index === 0 || index === 3
                        ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:opacity-90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
