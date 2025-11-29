import { Shield, Heart, Zap } from "lucide-react";

export default function CoreValue() {
  const values = [
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description:
        "Your trust is our currency. We use state-of-the-art encryption and are fully regulated by Bangladesh Bank.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description:
        "We build for people, not just profits. Our support team is available 24/7 in Bangla and English.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "We’re constantly pushing boundaries to bring world-class financial technology to every corner of the country.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Our Core Values
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            These principles guide every decision we make as we build the
            financial infrastructure for the next generation.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="group text-center space-y-6 transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Icon */}
              <div className="mx-auto w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                <value.icon
                  className="h-10 w-10 text-primary"
                  strokeWidth={2}
                />
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed px-4">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
