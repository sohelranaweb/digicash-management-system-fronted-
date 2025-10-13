import { Card } from "@/components/ui/card";

export default function Experience() {
  return (
    <section className="w-full bg-background text-foreground py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Secure and Convenient Experience
        </h2>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-10">
          {/* Left side */}
          <div className="space-y-16">
            <div className="rounded-2xl shadow-md hover:shadow-xl transition-shadow dark:bg-gray-800 p-10">
              <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-400 mb-2">
                Information Update
              </h3>
              <p className="text-muted-foreground">
                Update customer information easily through DigiCash App.
              </p>
            </div>

            <div className="rounded-2xl shadow-md hover:shadow-xl transition-shadow dark:bg-gray-800 p-10">
              <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-400 mb-2">
                DigiCash PIN and Verification Code
              </h3>
              <p className="text-muted-foreground">
                Secure your transactions with PIN and Verification Code.
              </p>
              <p className="text-xs text-muted-foreground mt-1 italic">
                *Never share your PIN or verification code with anyone.
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <Card className="p-4 rounded-3xl border border-border bg-card shadow-lg">
              <img
                src="https://i.ibb.co.com/5grd54qj/card-reader-small-business-1024x683.webp"
                alt="Secure DigiCash App Screen"
                className="w-[250px] md:w-[300px] lg:w-[320px] object-contain"
              />
            </Card>
          </div>

          {/* Right side */}
          <div className="space-y-16">
            <div className="rounded-2xl shadow-md hover:shadow-xl transition-shadow dark:bg-gray-800 p-10">
              <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-400 mb-2">
                Secure Transactions
              </h3>
              <p className="text-muted-foreground">
                Scan customer, agent, and merchant QR codes to make safe and
                secure transactions.
              </p>
            </div>

            <div className="rounded-2xl shadow-md hover:shadow-xl transition-shadow dark:bg-gray-800 p-10">
              <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-400 mb-2">
                Card Information Security
              </h3>
              <p className="text-muted-foreground">
                DigiCash follows global payment card industry security
                standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
