import { Sidebar } from "@/components/dashboard/Sidebar"
import { StatCard } from "@/components/analytics/StatCard"
import { DownloadsChart } from "@/components/analytics/DownloadsChart"
import { TopFilesChart } from "@/components/analytics/TopFilesChart"

export default function Analytics() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 space-y-6 p-8">
        <h1 className="text-2xl font-bold">Analytics</h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <StatCard label="Total Downloads" value="542" />
          <StatCard label="Files Shared" value="38" />
          <StatCard label="Storage Used" value="6.2GB" />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <DownloadsChart />
          <TopFilesChart />
        </div>
      </main>
    </div>
  )
}