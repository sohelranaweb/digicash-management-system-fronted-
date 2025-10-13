import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const businessItems = [
  {
    title: "Online Business",
    icon: "🛒",
  },
  {
    title: "Merchant",
    icon: "👩‍💼",
  },
  {
    title: "Educational Institutions",
    icon: "🏫",
  },
  {
    title: "Corporate & Enterprise",
    icon: "🏢",
  },
  {
    title: "Microfinance",
    icon: "🤝",
  },
];

export default function Business() {
  return (
    <section className="py-16 bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          DigiCash for Business
        </h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
          DigiCash empowers businesses with fast, secure, and modern digital
          payment solutions. Accept payments, send money, and manage
          transactions — all from one smart dashboard.
        </p>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side - Content */}
          <div className="text-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6 mb-10">
              {businessItems.map((item, index) => (
                <Card
                  key={index}
                  className="flex flex-col items-center justify-center p-6 hover:shadow-lg transition-shadow bg-card text-card-foreground rounded-2xl border border-border"
                >
                  <CardContent className="flex flex-col items-center space-y-4">
                    <div className="text-4xl">{item.icon}</div>
                    <h3 className="text-lg font-semibold text-center">
                      {item.title}
                    </h3>
                  </CardContent>
                </Card>
              ))}

              {/* Arrow Card */}
              <Card className="flex items-center justify-center bg-card rounded-2xl border border-border hover:shadow-lg transition-shadow">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <ArrowRight className="h-6 w-6" />
                </Button>
              </Card>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://i.ibb.co.com/MkDwBrx6/business.png"
              alt="Illustration of business person using DigiCash app"
              className="w-full max-w-md rounded-2xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
