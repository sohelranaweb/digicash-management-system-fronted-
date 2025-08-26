import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqQuestions() {
  return (
    <section className="w-full bg-background text-foreground py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Find quick answers about our product, shipping, and returns.
          </p>
        </div>

        {/* Accordion */}
        <Accordion
          type="single"
          collapsible
          className="w-full rounded-xl border bg-card text-card-foreground shadow-sm p-7"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-medium">
              How do I create a DigiCash account?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-sm leading-relaxed">
              <p>
                Download the DigiCash app, sign up with your phone number or
                email, and complete the verification process to create your
                account
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-medium">
              What documents do I need for account verification?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-sm leading-relaxed">
              <p>
                You’ll need a valid government-issued ID (Passport, Driver’s
                License, or National ID) to verify your account."
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-medium">
              How do I send money to someone?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-sm leading-relaxed">
              <p>
                Open the app, go to 'Send Money', enter the recipient’s details,
                amount, and confirm the transaction.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-medium">
              What are the transaction limits?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-sm leading-relaxed">
              <p>
                Transaction limits vary depending on your account type. Standard
                accounts have a daily limit of $1,000
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
