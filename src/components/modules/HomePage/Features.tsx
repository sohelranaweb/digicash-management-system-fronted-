import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, Smartphone, Send, LogOut } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Payment",
      description:
        "Making payments is now much easier through the DigiCash App.",
      icon: <Wallet className="h-10 w-10 text-pink-600 dark:text-pink-400" />,
      link: "#",
    },
    {
      title: "Mobile Recharge",
      description: "Recharge any number instantly and get the best offers.",
      icon: (
        <Smartphone className="h-10 w-10 text-pink-600 dark:text-pink-400" />
      ),
      link: "#",
    },
    {
      title: "Send Money",
      description:
        "Send money from DigiCash to any number securely & instantly.",
      icon: <Send className="h-10 w-10 text-pink-600 dark:text-pink-400" />,
      link: "#",
    },
    {
      title: "Cash Out",
      description:
        "Withdraw cash anytime from the largest Agent and ATM network.",
      icon: <LogOut className="h-10 w-10 text-pink-600 dark:text-pink-400" />,
      link: "#",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
          One Platform for all Financial Solutions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="rounded-2xl shadow-md hover:shadow-xl transition-shadow dark:bg-gray-800"
            >
              <CardHeader className="flex items-center justify-center">
                {feature.icon}
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </CardTitle>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {feature.description}
                </p>
                <Button
                  variant="link"
                  className="mt-4 text-pink-600 dark:text-pink-400 hover:underline"
                  asChild
                >
                  <a href={feature.link}>Learn More</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
