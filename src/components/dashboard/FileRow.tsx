import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { File } from "lucide-react"

interface FileRowProps {
  name: string
  size: string
  createdAt: string
}

export function FileRow({ name, size, createdAt }: FileRowProps) {
  return (
    <Card>
      <CardContent className="flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
            <File className="h-5 w-5 text-muted-foreground" />
          </div>
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-sm text-muted-foreground">
              {size} · Created: {createdAt}
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm">Share</Button>
          <Button variant="destructive" size="sm">Delete</Button>
        </div>
      </CardContent>
    </Card>
  )
}