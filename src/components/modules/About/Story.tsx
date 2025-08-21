import { Card, CardContent } from "@/components/ui/card";

export default function Story() {
  return (
    <section className="flex justify-center px-4 py-12 bg-pink-50 dark:bg-gray-900">
      <Card className="max-w-4xl bg-transparent shadow-none border-0">
        <CardContent className="space-y-6 text-gray-800 dark:text-gray-200">
          <h2 className="text-3xl font-bold text-center">The DigiCash Story</h2>

          <p>
            ‘DigiCash’ is a word that resonates with development, people’s
            prosperity, and social growth. Since its inception in 2011, DigiCash
            has become an integral part of the lives of millions today. Through
            fast, easy, and secure digital transactions, it has become a member
            of every household, and the word ‘DigiCash’ has become a verb.
            People now say ‘DigiCash me’ instead of ‘send me money’. Catering to
            people’s daily transactional needs, it is empowering them to fulfill
            their dreams as well as taking the country forward.
          </p>

          <p>
            Financial inclusion is in the DNA of DigiCash. Driving technological
            innovation and keeping compliance in all its dealings, the company
            has been bringing a wide range of services to empower customers and
            bring freedom in their financial transactions. Over the years,
            DigiCash has built a robust network of nearly 330,000 agents and
            550,000 merchants across the country. DigiCash also integrated with
            banks, financial institutions and service providers to strengthen
            the cashless digital financial ecosystem of the country. As a
            result, DigiCash is now a trusted platform with a large customer
            base of nearly 80 million.
          </p>

          <p>
            Launched in 2011, DigiCash, a joint venture of BRAC Bank, US-based
            Money in Motion LLC, International Finance Corporation of the World
            Bank Group, Gates Foundation, Ant International, and SoftBank,
            operates as a payment service provider offering a broad range of
            digital financial services under the regulation of Bangladesh Bank.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
