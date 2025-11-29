export default function Started() {
  const steps = [
    {
      number: "1",
      title: "Download App",
      description: "Get DigiCash from App Store or Google Play.",
    },
    {
      number: "2",
      title: "Create Account",
      description: "Sign up with your mobile number and NID.",
    },
    {
      number: "3",
      title: "Start Transacting",
      description: "Add money and start sending instantly.",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-primary/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Get started in minutes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No paperwork, no bank visits. Just download and go.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group text-center space-y-6 transition-all duration-300 hover:scale-[1.03]"
            >
              {/* Number Badge */}
              <div className="mx-auto w-20 h-20 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-3xl font-bold shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
                {step.number}
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}