import { Globe, ArrowRight } from "lucide-react";

export default function AboutBanner() {
  return (
    <section className="py-20 lg:py-32 bg-background dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left – Text */}
          <div className="space-y-8">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              From a <span className="text-primary">small idea</span> to a<br />
              <span className="text-primary">national movement</span>
            </h2>

            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                DigiCash started in 2019 with a simple observation: sending
                money home shouldn’t be difficult, expensive, or risky.
              </p>
              <p>
                What began as a small team in a shared office in Dhaka has grown
                into one of Bangladesh’s leading fintech companies. Today, we
                help millions of people pay bills, shop online, and support
                their families instantly.
              </p>
              <p>
                But we’re just getting started. Our vision is a cashless
                Bangladesh where financial freedom is accessible to everyone,
                everywhere.
              </p>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300 text-lg"
            >
              Join our journey
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          {/* Right – Globe Card with Primary Color */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-16 shadow-2xl border border-white/10 overflow-hidden">
                {/* Curved lines in primary color */}
                <div className="absolute inset-0 opacity-30">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 500 500"
                    fill="none"
                  >
                    <path
                      d="M100 380 Q250 120 400 380"
                      stroke="rgb(var(--primary))"
                      strokeWidth="3"
                    />
                    <path
                      d="M80 400 Q250 100 420 400"
                      stroke="rgb(var(--primary))"
                      strokeWidth="2"
                      opacity="0.6"
                    />
                    <path
                      d="M60 420 Q250 80 440 420"
                      stroke="rgb(var(--primary))"
                      strokeWidth="1.5"
                      opacity="0.4"
                    />
                  </svg>
                </div>

                {/* Globe Icon in Primary Color */}
                <div className="relative text-center space-y-8">
                  <Globe
                    className="h-28 w-28 mx-auto text-primary"
                    strokeWidth={1.8}
                  />
                  <p className="text-2xl font-medium text-white">
                    Connecting 64 Districts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
