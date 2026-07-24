import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function StorageCard() {
  const usedGB = 2.4
  const totalGB = 10
  const percentage = Math.round((usedGB / totalGB) * 100)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-medium">Storage</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">
          {usedGB}GB / {totalGB}GB
        </p>
        <Progress value={percentage} />
        <p className="text-sm text-muted-foreground">{percentage}%</p>
      </CardContent>
    </Card>
  )
}