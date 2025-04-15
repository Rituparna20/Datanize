"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { FileText, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function FileUpload() {
  const router = useRouter()
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = () => {
    if (file) {
      // In a real app, you would upload the file here
      console.log("Uploading file:", file.name)
      // Navigate to preprocessing page after upload
      router.push("/dashboard/preprocess")
    }
  }

  return (
    <div className="space-y-4">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="file">Excel File</Label>
        <div className="flex items-center gap-2">
          <Input id="file" type="file" accept=".xlsx,.xls" onChange={handleFileChange} />
        </div>
      </div>

      {file && (
        <div className="flex items-center gap-2 text-sm">
          <FileText className="h-4 w-4 text-primary" />
          <span>{file.name}</span>
        </div>
      )}

      <div className="flex gap-2">
        <Button onClick={handleUpload} disabled={!file}>
          <Upload className="mr-2 h-4 w-4" />
          Upload and Continue
        </Button>
      </div>
    </div>
  )
}
