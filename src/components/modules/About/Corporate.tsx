import Image from "@/assets/images/corporate.webp";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Corporate({ loading }: { loading: boolean }) {
  return (
    <section className="flex justify-center px-6 py-16 bg-white dark:bg-gray-900">
      {loading ? (
        <div className="space-y-4">
          <Skeleton className="h-8 w-40" />
          <Skeleton className="h-4 w-full max-w-md" />
          <Skeleton className="h-4 w-full max-w-lg" />
        </div>
      ) : (
        <Card className="max-w-6xl w-full border-0 shadow-none bg-transparent">
          <CardContent className="flex flex-col md:flex-row items-center gap-10 text-gray-800 dark:text-gray-200">
            {/* Left Side - Illustration */}
            <div className="flex-1 flex justify-center">
              <img
                src={Image} // replace with your own image path
                alt="Corporate Social Responsibility"
                width={500}
                height={350}
                className="object-contain"
              />
            </div>

            {/* Right Side - Text */}
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">
                Corporate Social Responsibility of DigiCash
              </h2>
              <p className="text-base leading-relaxed">
                As a socially responsible MFS provider, DigiCash Limited is
                committed morally and remains engaged in sustainable CSR
                activities according to the regulatory guidelines with the
                ultimate achievement of financial inclusion.
              </p>
              <Button className="bg-pink-600 hover:bg-pink-700 text-white rounded-full px-6">
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </section>
  );
}
