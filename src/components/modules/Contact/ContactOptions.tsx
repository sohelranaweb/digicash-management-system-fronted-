import {
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Shield,
  ShieldAlert,
} from "lucide-react";

export default function ContactOptions() {
  return (
    <section className="w-full bg-background text-foreground py-14 md:py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Multiple Ways to Reach Us
        </h2>
        <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Choose the most convenient way to contact our support team. We&apos;re
          available around the clock.
        </p>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Call Us */}
          <div className="bg-card p-6 rounded-2xl shadow-sm space-y-3">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 mx-auto">
              <Phone className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg">Call Us</h3>
            <p className="text-sm text-muted-foreground">
              24/7 Customer Support
            </p>
            <a href="tel:+15551234567" className="text-blue-600 font-medium">
              +1 (555) 123-4567
            </a>
          </div>

          {/* Email Us */}
          <div className="bg-card p-6 rounded-2xl shadow-sm space-y-3">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 mx-auto">
              <Mail className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-lg">Email Us</h3>
            <p className="text-sm text-muted-foreground">Get help via email</p>
            <a
              href="mailto:support@digicash.com"
              className="text-blue-600 font-medium"
            >
              support@digicash.com
            </a>
          </div>

          {/* Live Chat */}
          <div className="bg-card p-6 rounded-2xl shadow-sm space-y-3">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 mx-auto">
              <MessageSquare className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-lg">Live Chat</h3>
            <p className="text-sm text-muted-foreground">Chat with our team</p>
            <a href="#" className="text-blue-600 font-medium">
              Start Chat Now
            </a>
          </div>

          {/* Visit Us */}
          <div className="bg-card p-6 rounded-2xl shadow-sm space-y-3">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 mx-auto">
              <MapPin className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="font-semibold text-lg">Visit Us</h3>
            <p className="text-sm text-muted-foreground">Our headquarters</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              className="text-blue-600 font-medium"
            >
              123 Financial District, NY 10005
            </a>
          </div>
        </div>

        {/* Emergency Support */}
        <div className="bg-blue-50 dark:bg-blue-950/40 p-6 rounded-2xl space-y-3">
          <h3 className="font-semibold text-lg">Emergency Support</h3>
          <p className="text-sm text-muted-foreground">
            If you&apos;re experiencing urgent issues with your account or
            suspect fraudulent activity, contact our emergency hotline
            immediately.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-3 text-sm">
            <div className="flex items-center gap-2 text-red-600 font-medium">
              <ShieldAlert className="h-4 w-4" />
              Emergency: +1 (555) 911-HELP
            </div>
            <div className="flex items-center gap-2 text-blue-600 font-medium">
              <Shield className="h-4 w-4" />
              Fraud Report: fraud@digicash.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
