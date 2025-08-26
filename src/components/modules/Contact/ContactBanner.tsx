import { cn } from "@/lib/utils";

export default function ContactBanner() {
  return (
    <section
      className={cn(
        "relative w-full flex items-center justify-center px-6 py-20 text-center",
        "bg-[--background] text-[--foreground]"
      )}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/40 dark:from-primary/30 dark:to-primary/60" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Get in Touch</h2>
        <p className="text-base md:text-lg text-muted-foreground">
          Have questions about{" "}
          <span className="font-semibold text-primary">DigiCash</span>? Need
          support? Our team is here to help you 24/7. the most comprehensive
          digital payment platform. <br />
          Reach out to us anytime.
        </p>
      </div>
    </section>
  );
}
