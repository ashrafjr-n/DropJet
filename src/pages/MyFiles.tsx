import { useState } from "react"
import { Search } from "lucide-react"
import { Sidebar } from "@/components/dashboard/Sidebar"
import { FileRow } from "@/components/dashboard/FileRow"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const mockFiles = [
  { name: "project.zip", size: "2.4GB", createdAt: "Today" },
  { name: "resume.pdf", size: "1MB", createdAt: "Yesterday" },
  { name: "image.png", size: "5MB", createdAt: "Monday" },
  { name: "invoice.pdf", size: "300KB", createdAt: "Last week" },
]

export default function MyFiles() {
  const [query, setQuery] = useState("")

  const filteredFiles = mockFiles.filter((file) =>
    file.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 space-y-6 p-8">
        <h1 className="text-2xl font-bold">My Files</h1>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search files..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9"
            />
          </div>

          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-40">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="documents">Documents</SelectItem>
              <SelectItem value="images">Images</SelectItem>
              <SelectItem value="archives">Archives</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="newest">
            <SelectTrigger className="w-full sm:w-40">
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="size">Size</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          {filteredFiles.length > 0 ? (
            filteredFiles.map((file) => (
              <FileRow key={file.name} {...file} />
            ))
          ) : (
            <p className="py-12 text-center text-muted-foreground">
              No files found.
            </p>
          )}
        </div>
      </main>
    </div>
  )
}