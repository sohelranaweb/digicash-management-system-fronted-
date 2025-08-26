import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Fingerprint, Lock, Shield } from "lucide-react";

export default function SecurityFeature() {
  return (
    <section className="w-full bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4 md:space-y-5">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Security & Privacy
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Your security is our top priority. DigiCash employs multiple layers
            of protection to keep your money and data safe.
          </p>
        </div>

        {/* Features */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
          {/* Card 1 */}
          <Card className="h-full bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow rounded-2xl">
            <CardHeader className="space-y-4">
              <div className="h-16 w-16 rounded-full bg-destructive/10 text-destructive flex items-center justify-center ring-1 ring-border">
                <Shield className="h-7 w-7" />
              </div>
              <CardTitle className="text-xl md:text-2xl font-bold tracking-tight">
                Bank-Level Encryption
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                All data is protected with 256-bit SSL encryption, the same
                security standard used by major banks worldwide.
              </p>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="h-full bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow rounded-2xl">
            <CardHeader className="space-y-4">
              <div className="h-16 w-16 rounded-full bg-destructive/10 text-destructive flex items-center justify-center ring-1 ring-border">
                <Fingerprint className="h-7 w-7" />
              </div>
              <CardTitle className="text-xl md:text-2xl font-bold tracking-tight">
                Biometric Authentication
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Secure login and transaction approval using fingerprint, face
                recognition, or voice authentication.
              </p>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="h-full bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow rounded-2xl">
            <CardHeader className="space-y-4">
              <div className="h-16 w-16 rounded-full bg-destructive/10 text-destructive flex items-center justify-center ring-1 ring-border">
                <Lock className="h-7 w-7" />
              </div>
              <CardTitle className="text-xl md:text-2xl font-bold tracking-tight">
                Multi-Factor Authentication
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Additional security layers including SMS OTP, email
                verification, and security questions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
