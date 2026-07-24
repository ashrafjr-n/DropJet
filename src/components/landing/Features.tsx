import { ShieldCheck, Clock, Zap, FolderCog } from "lucide-react"

const features = [
  {
    icon: ShieldCheck,
    title: "Secure Sharing",
    description: "Your files are protected with secure access control.",
  },
  {
    icon: Clock,
    title: "Expiring Links",
    description: "Automatically delete access after selected time.",
  },
  {
    icon: Zap,
    title: "Fast Upload",
    description: "Optimized file handling for large files.",
  },
  {
    icon: FolderCog,
    title: "File Management",
    description: "Organize and control all your uploads.",
  },
]

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="space-y-3 rounded-xl border border-border p-6 transition-colors hover:border-foreground/20"
          >
            <feature.icon className="h-6 w-6 text-foreground" />
            <h3 className="font-semibold">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}