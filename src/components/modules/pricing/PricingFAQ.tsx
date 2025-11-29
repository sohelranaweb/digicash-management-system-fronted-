import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PricingFAQ() {
  const faqs = [
    {
      question: "Are there any hidden fees for maintaining an account?",
      answer:
        "No, DigiCash is completely free to use. There are no account maintenance fees, no inactivity charges, and no hidden costs — ever. You only pay when you cash out or use premium features.",
    },
    {
      question: "Is my money secure with DigiCash?",
      answer:
        "Absolutely. Your money is held in a segregated trust account with partner banks regulated by Bangladesh Bank. We use 256-bit encryption, two-factor authentication, and real-time fraud monitoring to keep your funds safe.",
    },
    {
      question: "How do I upgrade to a Merchant account?",
      answer:
        "Simply go to Settings → Account Type → Become a Merchant. Submit your business documents (trade license, NID, etc.), and our team will verify and upgrade your account within 24–48 hours.",
    },
    {
      question: "Can I use DigiCash internationally?",
      answer:
        "Currently, DigiCash operates within Bangladesh only. You can send and receive money from anyone inside the country instantly. International remittances and cross-border payments are coming soon in 2026.",
    },
    {
      question: "What are the limits for unverified accounts?",
      answer:
        "Unverified (basic) accounts can send up to 5,000 BDT per day and hold up to 25,000 BDT in total balance. Full verification (NID + selfie) unlocks 100k+ BDT daily limits and all Pro features.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about DigiCash pricing.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-2xl border border-border/80 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="px-6 py-5 text-left text-base sm:text-lg font-medium hover:no-underline [&[data-state=open]]:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
