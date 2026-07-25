import { Sidebar } from "@/components/dashboard/Sidebar"
import { SharedLinkRow } from "@/components/dashboard/SharedLinkRow"

const mockLinks = [
  { fileName: "project.zip", url: "dropjet.com/f/a82js92", expiresIn: "Tomorrow", downloads: 12 },
  { fileName: "resume.pdf", url: "dropjet.com/f/x91ks03", expiresIn: "3 days", downloads: 5 },
  { fileName: "image.png", url: "dropjet.com/f/q77lm41", expiresIn: "Expired", downloads: 28 },
]

export default function SharedLinks() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 space-y-6 p-8">
        <h1 className="text-2xl font-bold">Shared Links</h1>

        <div className="space-y-3">
          {mockLinks.map((link) => (
            <SharedLinkRow key={link.url} {...link} />
          ))}
        </div>
      </main>
    </div>
  )
}