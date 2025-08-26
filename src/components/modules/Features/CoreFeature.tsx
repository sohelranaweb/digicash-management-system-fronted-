import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Send, Smartphone, FileText } from "lucide-react";

const features = [
  {
    icon: <Send className="w-6 h-6 text-primary" />,
    title: "Instant Money Transfer",
    description:
      "Send money to anyone with just their mobile number. Transfers complete in seconds with real-time notifications.",
    points: [
      "No bank account needed",
      "Works 24/7",
      "Real-time processing",
      "SMS notifications",
    ],
  },
  {
    icon: <Smartphone className="w-6 h-6 text-primary" />,
    title: "Mobile Recharge",
    description:
      "Top up your mobile balance or buy data packages instantly. Support for all major network providers.",
    points: [
      "All network operators",
      "Instant activation",
      "Balance history",
      "Auto-recharge options",
    ],
  },
  {
    icon: <FileText className="w-6 h-6 text-primary" />,
    title: "Bill Payment",
    description:
      "Pay utility bills, internet, TV subscriptions, and more. Never miss a payment with smart reminders.",
    points: [
      "100+ service providers",
      "Payment reminders",
      "Auto-pay setup",
      "Payment history",
    ],
  },
];

export default function CoreFeature() {
  return (
    <section className="w-full py-16 px-6 bg-[--background] text-[--foreground]">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Core Features</h2>
        <p className="text-muted-foreground mt-3">
          Everything you need for modern digital payments, all in one secure and
          easy-to-use platform.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <Card
            key={idx}
            className="rounded-2xl shadow-sm border bg-card hover:shadow-md transition"
          >
            <CardContent className="p-6">
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted mb-4">
                {feature.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {feature.description}
              </p>

              {/* Checklist */}
              <ul className="space-y-2 text-sm">
                {feature.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
