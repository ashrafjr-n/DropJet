import { Sidebar } from "@/components/dashboard/Sidebar"
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { StorageCard } from "@/components/dashboard/StorageCard"
import { QuickUpload } from "@/components/dashboard/QuickUpload"
import { RecentFiles } from "@/components/dashboard/RecentFiles"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 space-y-8 p-8">
        <div className="flex items-center justify-between">
          <DashboardHeader />
          <QuickUpload />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <StorageCard />
          </div>
          <div className="lg:col-span-2">
            <RecentFiles />
          </div>
        </div>
      </main>
    </div>
  )
}