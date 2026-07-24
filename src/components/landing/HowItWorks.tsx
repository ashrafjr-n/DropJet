const steps = [
  { number: "01", title: "Upload", description: "Choose your file" },
  { number: "02", title: "Protect", description: "Set permissions" },
  { number: "03", title: "Share", description: "Send the link" },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="mb-16 text-center text-3xl font-bold">How It Works</h2>
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
        {steps.map((step) => (
          <div key={step.number} className="text-center">
            <span className="text-5xl font-bold text-muted-foreground/30">
              {step.number}
            </span>
            <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
            <p className="mt-2 text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}