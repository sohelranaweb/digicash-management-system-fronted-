import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "DigiCash changed how I run my shop. Customers pay with QR, and I get the money instantly. No more loose change issues.",
      author: "Rahim Uddin",
      role: "Small Business Owner",
    },
    {
      quote:
        "I receive payments from clients directly to my wallet. It’s so much faster than bank transfers. Highly recommended!",
      author: "Fatema Begum",
      role: "Freelancer",
    },
    {
      quote:
        "Best app for mobile recharge and sending money to friends. The app is super smooth and never crashes.",
      author: "Tanvir Ahmed",
      role: "Student",
    },
  ];

  const StarRating = ({ rating = 5 }: { rating?: number }) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? "fill-primary text-primary"
              : "fill-muted text-muted-foreground/30"
          }`}
        />
      ))}
    </div>
  );

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Loved by millions
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <StarRating rating={5} />
            <span className="text-lg font-medium text-primary">
              4.9/5 Rating
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-3xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-2 mb-4">
                <StarRating rating={5} />
              </div>

              <blockquote className="text-lg text-foreground leading-relaxed mb-6">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground/70 font-semibold">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{t.author}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
