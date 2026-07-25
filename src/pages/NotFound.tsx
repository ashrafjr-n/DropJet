import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { FileX } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-muted">
        <FileX className="h-7 w-7 text-muted-foreground" />
      </div>

      <h1 className="text-xl font-bold">File not found</h1>
      <p className="text-muted-foreground">The link may have expired.</p>

      <Link to="/">
        <Button className="mt-2">Go Home</Button>
      </Link>
    </div>
  )
}