import { Button } from "@/components/ui/button"
import { UploadCloud } from "lucide-react"

export function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-24 md:flex-row md:py-32">
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          Share files.
          <br />
          <span className="text-muted-foreground">Fast. Secure. Simple.</span>
        </h1>
        <p className="mx-auto max-w-md text-lg text-muted-foreground md:mx-0">
          Upload your files and share them with anyone using a secure link.
        </p>
        <Button size="lg" className="text-base">Start Upload</Button>
      </div>

      <div className="flex-1">
        <div className="mx-auto flex h-64 w-full max-w-sm flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-border bg-muted/30 text-muted-foreground transition-colors hover:border-foreground/30">
          <UploadCloud className="h-10 w-10" />
          <span className="font-medium">Drop Files</span>
          <span className="text-xs">or click to browse</span>
        </div>
      </div>
    </section>
  )
}