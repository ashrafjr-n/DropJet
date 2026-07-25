import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { name: "project.zip", downloads: 128 },
  { name: "resume.pdf", downloads: 94 },
  { name: "image.png", downloads: 61 },
  { name: "invoice.pdf", downloads: 40 },
]

export function TopFilesChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-medium">
          Most Downloaded Files
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={data} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis type="number" className="text-xs" tick={{ fill: "currentColor" }} />
            <YAxis
              type="category"
              dataKey="name"
              width={90}
              className="text-xs"
              tick={{ fill: "currentColor" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--background)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
              }}
            />
            <Bar dataKey="downloads" fill="currentColor" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}