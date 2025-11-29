import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Lock, Users } from "lucide-react";

export default function PricingBanner() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 bg-background text-foreground overflow-hidden">
      {/* Optional subtle background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent dark:from-primary/10" />
      </div>

      <div className="w-full max-w-5xl mx-auto text-center space-y-10 sm:space-y-12 lg:space-y-16">
        {/* Badge */}
        <Badge
          variant="outline"
          className="mx-auto bg-primary/10 border-primary/30 text-primary hover:bg-primary/15 text-xs sm:text-sm px-4 py-2 transition-colors"
        >
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Simple, Transparent Pricing
          </span>
        </Badge>

        {/* Main Headline - Ultra Responsive */}
        <h1 className="font-bold tracking-tight leading-none text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          Financial freedom
          <br />
          <span className="text-primary bg-clip-text  bg-gradient-to-r from-primary to-primary/80">
            shouldn't cost
          </span>{" "}
          a fortune.
        </h1>

        {/* Subheadline */}
        <p className="text-base xs:text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
          Whether you're sending money to family in the village or running a
          business in Dhaka,{" "}
          <span className="font-semibold text-foreground">DigiCash</span> offers
          the most competitive rates in Bangladesh.
        </p>

        {/* CTA Buttons - Stack on mobile, row on larger screens */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 sm:mt-10">
          <Button
            size="lg"
            className="w-full sm:w-auto min-w-[200px] sm:min-w-[220px] text-base sm:text-lg font-semibold h-12 sm:h-14 shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-[1.02]"
          >
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto min-w-[200px] sm:min-w-[180px] text-base sm:text-lg h-12 sm:h-14"
          >
            View Pricing
          </Button>
        </div>

        {/* Trust Indicators - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mt-16 sm:mt-20 pt-10 border-t border-border">
          <div className="flex flex-col items-center gap-3">
            <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
            <span className="text-sm sm:text-base text-muted-foreground font-medium">
              BB Licensed
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Lock className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
            <span className="text-sm sm:text-base text-muted-foreground font-medium">
              256-bit Encryption
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Users className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
            <span className="text-sm sm:text-base text-muted-foreground font-medium">
              2M+ Happy Users
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
