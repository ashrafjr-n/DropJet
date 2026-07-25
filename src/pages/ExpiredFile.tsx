import { Clock } from "lucide-react"

export default function ExpiredFile() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-muted">
        <Clock className="h-7 w-7 text-muted-foreground" />
      </div>

      <h1 className="text-xl font-bold">This file is no longer available.</h1>
      <p className="text-muted-foreground">Expired 2 days ago.</p>
    </div>
  )
}