import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 text-center">
      <div className="rounded-2xl border border-border bg-muted/30 px-8 py-16">
        <h2 className="text-3xl font-bold">Ready to share?</h2>
        <p className="mt-3 text-muted-foreground">Create your free account</p>
        <Button size="lg" className="mt-8 text-base">Get Started</Button>
      </div>
    </section>
  )
}