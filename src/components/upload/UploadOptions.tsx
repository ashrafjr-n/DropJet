import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function UploadOptions() {
  const [passwordEnabled, setPasswordEnabled] = useState(false)

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <Label>Expiration</Label>
        <Select defaultValue="24h">
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1h">1 Hour</SelectItem>
            <SelectItem value="24h">24 Hours</SelectItem>
            <SelectItem value="7d">7 Days</SelectItem>
            <SelectItem value="30d">30 Days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password-toggle">Password</Label>
          <Switch
            id="password-toggle"
            checked={passwordEnabled}
            onCheckedChange={setPasswordEnabled}
          />
        </div>
        {passwordEnabled && (
          <Input type="password" placeholder="Set a password" />
        )}
      </div>
    </div>
  )
}