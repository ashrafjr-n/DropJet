import { useState } from "react"
import { Download, Lock, FileArchive } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

// Mock data — سيأتي لاحقاً من الـ backend بناءً على رابط المشاركة
const mockFile = {
  name: "Project.zip",
  size: "2.4GB",
  uploadedBy: "Ashraf",
  expiresIn: "Tomorrow",
  hasPassword: true, // بدّلها false لمعاينة الحالة بدون كلمة مرور
}

export default function SharedFile() {
  const [unlocked, setUnlocked] = useState(!mockFile.hasPassword)
  const [password, setPassword] = useState("")

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <Card className="w-full max-w-sm">
        <CardContent className="space-y-6 py-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-muted">
            <FileArchive className="h-7 w-7 text-muted-foreground" />
          </div>

          {unlocked ? (
            <>
              <div>
                <h1 className="text-xl font-bold">{mockFile.name}</h1>
                <p className="text-sm text-muted-foreground">{mockFile.size}</p>
              </div>

              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Uploaded by {mockFile.uploadedBy}</p>
                <p>Expires: {mockFile.expiresIn}</p>
              </div>

              <Button size="lg" className="w-full gap-2">
                <Download className="h-4 w-4" />
                Download
              </Button>
            </>
          ) : (
            <>
              <div className="flex items-center justify-center gap-2">
                <Lock className="h-4 w-4 text-muted-foreground" />
                <h1 className="text-lg font-semibold">Enter password</h1>
              </div>

              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button
                size="lg"
                className="w-full"
                onClick={() => setUnlocked(true)}
              >
                Unlock
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}