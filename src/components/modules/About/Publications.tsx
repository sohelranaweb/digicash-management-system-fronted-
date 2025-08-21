import Image from "@/assets/images/Publications.webp";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Publications() {
  return (
    <section className="flex justify-center px-6 py-16 bg-pink-50 dark:bg-gray-900">
      <Card className="max-w-6xl w-full border-0 shadow-none bg-transparent">
        <CardContent className="flex flex-col md:flex-row items-center gap-10 text-gray-800 dark:text-gray-200">
          {/* Left Side - Text */}
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Publications about DigiCash
            </h2>
            <p className="text-base leading-relaxed">
              DigiCash media releases on services, events, technology,
              achievements along with prominent media coverage on DigiCash’s
              contribution, exclusive interviews, columns, features, etc.
            </p>

            <div className="flex gap-4">
              <Button
                variant="outline"
                className="rounded-full border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white"
              >
                From DigiCash
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white"
              >
                Media
              </Button>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="flex-1 flex justify-center">
            <img
              src={Image} // replace with your own image
              alt="Publications"
              width={500}
              height={350}
              className="object-contain"
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
