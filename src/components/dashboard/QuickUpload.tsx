import { Link } from "react-router-dom"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export function QuickUpload() {
  return (
    <Link to="/upload">
      <Button size="lg" className="gap-2">
        <Plus className="h-4 w-4" />
        Upload File
      </Button>
    </Link>
  )
}