import { UploadCloud } from "lucide-react"

export function UploadDropzone() {
  return (
    <div className="flex h-72 w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-border bg-muted/30 text-muted-foreground transition-colors hover:border-foreground/30 hover:bg-muted/50 cursor-pointer">
      <UploadCloud className="h-10 w-10" />
      <span className="font-medium text-foreground">Drop Files</span>
      <span className="text-xs">or click to browse</span>
    </div>
  )
}