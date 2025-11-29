import { Button } from "@/components/ui/button";
import { Smartphone, Apple } from "lucide-react";

export default function DownloadApp() {
  return (
    <section className="bg-primary text-primary-foreground py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          Ready to simplify your finances?
        </h2>

        {/* Subheadline */}
        <p className="mt-6 text-lg sm:text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
          Join 2.5 million Bangladeshis who trust DigiCash for their daily
          payments. Download the app today.
        </p>

        {/* Download Buttons – shadcn/ui + Tailwind */}
        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* Android Button – White with primary text */}
          <Button
            size="lg"
            variant="secondary"
            className="min-w-[280px] h-16 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
          >
            <Smartphone className="mr-3 h-6 w-6" />
            Download for Android
          </Button>

          {/* iOS Button – Dark teal/green with white text */}
          <Button
            size="lg"
            className="min-w-[280px] h-16 text-lg font-semibold rounded-2xl bg-primary-foreground text-primary hover:bg-primary-foreground/95 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 ring-4 ring-white/20"
          >
            <Apple className="mr-3 h-6 w-6" />
            Download for iOS
          </Button>
        </div>

        {/* Trust Indicators */}
        <p className="mt-16 text-sm lg:text-base opacity-80 font-medium">
          Licensed by Bangladesh Bank • PCI-DSS Certified • 24/7 Support
        </p>
      </div>
    </section>
  );
}
