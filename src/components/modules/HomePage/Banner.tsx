import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Home_Banner from "@/assets/images/homeb3.png";
import { Link } from "react-router";
// use react-router-dom not react-router

export default function HomeBanner() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate fetch delay
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-gradient-to-r from-pink-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Side - Text Content */}
        <div className="flex-1 text-center md:text-left">
          {loading ? (
            <div className="space-y-4">
              <Skeleton className="h-10 w-[280px] mx-auto md:mx-0" />
              <Skeleton className="h-6 w-[400px] mx-auto md:mx-0" />
              <div className="flex justify-center md:justify-start gap-4 mt-6">
                <Skeleton className="h-12 w-32 rounded-full" />
                <Skeleton className="h-12 w-32 rounded-full" />
              </div>
            </div>
          ) : (
            <>
              <h1 className="text-4xl md:text-5xl font-extrabold text-pink-700 dark:text-pink-400 mb-4">
                YOUR MONEY, YOUR FREEDOM 🚀
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
                Send, receive, and manage money securely with{" "}
                <span className="font-semibold text-pink-600 dark:text-pink-400">
                  DigiCash
                </span>{" "}
                — fast, reliable, and built for everyone.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <Link
                  to="/register"
                  className="bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 transition"
                >
                  Get Started
                </Link>
                <Link
                  to="/features"
                  className="bg-white text-pink-600 px-6 py-3 rounded-full shadow-lg border hover:bg-gray-100 dark:bg-gray-700 dark:text-pink-400 dark:border-gray-600 dark:hover:bg-gray-600 transition"
                >
                  Learn More
                </Link>
              </div>
            </>
          )}
        </div>

        {/* Right Side - Poster Image */}
        <div className="flex-1 flex justify-center">
          {loading ? (
            <Skeleton className="w-full h-[300px] md:h-[400px] rounded-lg" />
          ) : (
            <img
              src={Home_Banner}
              alt="DigiCash Banner"
              className="w-full h-auto bg-pink-50 dark:bg-gray-700 rounded-lg transition"
            />
          )}
        </div>
      </div>
    </section>
  );
}
