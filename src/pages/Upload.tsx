import { Button } from "@/components/ui/button"
import { UploadDropzone } from "@/components/upload/UploadDropzone"
import { UploadOptions } from "@/components/upload/UploadOptions"

export default function Upload() {
  return (
    <div className="mx-auto flex min-h-screen max-w-xl flex-col justify-center gap-8 px-6 py-16">
      <h1 className="text-center text-2xl font-bold">Upload Files</h1>

      <UploadDropzone />

      <UploadOptions />

      <Button size="lg" className="w-full">Upload</Button>
    </div>
  )
}