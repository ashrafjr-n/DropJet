import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Link2, Copy, Trash2 } from "lucide-react"

interface SharedLinkRowProps {
  fileName: string
  url: string
  expiresIn: string
  downloads: number
}

export function SharedLinkRow({ fileName, url, expiresIn, downloads }: SharedLinkRowProps) {
  return (
    <Card>
      <CardContent className="flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
            <Link2 className="h-5 w-5 text-muted-foreground" />
          </div>
          <div>
            <p className="font-medium">{fileName}</p>
            <p className="text-sm text-muted-foreground">
              {url} · Expires: {expiresIn} · {downloads} downloads
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Copy className="h-3.5 w-3.5" />
            Copy
          </Button>
          <Button variant="destructive" size="sm">
            <Trash2 className="h-3.5 w-3.5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}