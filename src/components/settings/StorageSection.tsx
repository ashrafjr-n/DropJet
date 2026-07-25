import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

export function StorageSection() {
  const usedGB = 6.2
  const totalGB = 10
  const percentage = Math.round((usedGB / totalGB) * 100)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium">Current Plan</p>
          <p className="text-sm text-muted-foreground">Free Plan — 10GB storage</p>
        </div>
        <Button variant="outline">Upgrade</Button>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">Usage</p>
        <Progress value={percentage} />
        <p className="text-sm text-muted-foreground">
          {usedGB}GB / {totalGB}GB used
        </p>
      </div>
    </div>
  )
}