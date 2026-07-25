import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export function SecuritySection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium">Change Password</p>
          <p className="text-sm text-muted-foreground">
            Update your account password
          </p>
        </div>
        <Button variant="outline">Change</Button>
      </div>

      <Separator />

      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium">Active Sessions</p>
          <p className="text-sm text-muted-foreground">
            Manage devices currently logged in
          </p>
        </div>
        <Button variant="outline">View</Button>
      </div>

      <Separator />

      <div className="flex items-center justify-between">
        <div>
          <Label htmlFor="2fa">Two Factor Authentication</Label>
          <p className="text-sm text-muted-foreground">
            Add an extra layer of security
          </p>
        </div>
        <Switch id="2fa" />
      </div>
    </div>
  )
}