import { Check, X } from "lucide-react";

export default function PricingDetails() {
  const features = [
    {
      name: "Send Money Fee",
      starter: "Free (limit)",
      pro: "Free (unlimited)",
      merchant: "N/A",
      enterprise: "Custom",
      highlight: true,
    },
    {
      name: "Cash Out Fee",
      starter: "1.85%",
      pro: "1.50%",
      merchant: "Bank Transfer",
      enterprise: "Custom",
    },
    {
      name: "Transaction Limit",
      starter: "25k BDT/day",
      pro: "100k BDT/day",
      merchant: "Unlimited",
      enterprise: "Unlimited",
      highlight: true,
    },
    {
      name: "Virtual Card",
      starter: <X className="h-5 w-5 text-muted-foreground mx-auto" />,
      pro: <Check className="h-6 w-6 text-primary mx-auto" />,
      merchant: <X className="h-5 w-5 text-muted-foreground mx-auto" />,
      enterprise: "Optional",
    },
    {
      name: "API Access",
      starter: <X className="h-5 w-5 text-muted-foreground mx-auto" />,
      pro: <X className="h-5 w-5 text-muted-foreground mx-auto" />,
      merchant: <Check className="h-6 w-6 text-primary mx-auto" />,
      enterprise: "Full Access",
      highlight: true,
    },
    {
      name: "Analytics",
      starter: "Basic",
      pro: "Advanced",
      merchant: "Business Suite",
      enterprise: "Custom Reports",
    },
    {
      name: "Support",
      starter: "Chat",
      pro: "Priority Chat",
      merchant: "Phone + Chat",
      enterprise: "Dedicated Agent",
      highlight: true,
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Detailed Feature Comparison
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Compare limits, fees, and features across all plans.
          </p>
        </div>

        {/* Desktop & Tablet Table */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
          <table className="w-full table-fixed">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left py-6 pl-8 pr-4 font-medium text-muted-foreground">
                  Features
                </th>
                <th className="py-6 text-center font-semibold">Starter</th>
                <th className="py-6 text-center font-bold text-primary relative">
                  Pro
                </th>
                <th className="py-6 text-center font-semibold">Merchant</th>
                <th className="py-6 pr-8 pl-4 text-center font-semibold">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {features.map((feature, idx) => (
                <tr
                  key={idx}
                  className={`transition-colors ${
                    feature.highlight ? "bg-primary/5 dark:bg-primary/10" : ""
                  }`}
                >
                  <td className="py-6 pl-8 pr-4 font-medium text-foreground">
                    {feature.name}
                  </td>
                  <td className="py-6 text-center text-muted-foreground">
                    {typeof feature.starter === "string"
                      ? feature.starter
                      : feature.starter}
                  </td>
                  <td className="py-6 text-center font-semibold text-primary">
                    {typeof feature.pro === "string"
                      ? feature.pro
                      : feature.pro}
                  </td>
                  <td className="py-6 text-center text-muted-foreground">
                    {typeof feature.merchant === "string"
                      ? feature.merchant
                      : feature.merchant}
                  </td>
                  <td className="py-6 pr-8 pl-4 text-center font-medium">
                    {feature.enterprise}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards (stacked) */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          {["Starter", "Pro", "Merchant", "Enterprise"].map((plan) => (
            <div
              key={plan}
              className={`rounded-2xl border ${
                plan === "Pro"
                  ? "border-primary shadow-lg shadow-primary/10"
                  : "border-border"
              } bg-card p-6`}
            >
              <div className="text-center mb-6">
                <h3
                  className={`text-xl font-bold ${
                    plan === "Pro" ? "text-primary" : ""
                  }`}
                >
                  {plan}
                  {plan === "Pro" && (
                    <span className="block text-xs font-bold bg-primary text-primary-foreground px-3 py-1 rounded-full mt-2 mx-auto w-fit">
                      BEST VALUE
                    </span>
                  )}
                </h3>
              </div>
              <dl className="space-y-4">
                {features.map((f, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <dt className="text-muted-foreground">{f.name}</dt>
                    <dd
                      className={`font-medium ${
                        plan === "Pro" ? "text-primary" : ""
                      }`}
                    >
                      {plan === "Starter" &&
                        (typeof f.starter === "string" ? f.starter : f.starter)}
                      {plan === "Pro" &&
                        (typeof f.pro === "string" ? f.pro : f.pro)}
                      {plan === "Merchant" &&
                        (typeof f.merchant === "string"
                          ? f.merchant
                          : f.merchant)}
                      {plan === "Enterprise" && f.enterprise}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
