"use client"

import type React from "react"

import { useState } from "react"
import { Upload, ImageIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface ImageUploadProps {
  setImages: (images: string[]) => void
}

export function ImageUpload({ setImages }: ImageUploadProps) {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFiles(e.target.files)
    }
  }

  const handleUpload = () => {
    if (selectedFiles) {
      // In a real app, you would upload the files to your server
      // For now, we'll create local URLs for preview
      const imageUrls = Array.from(selectedFiles).map((file) => URL.createObjectURL(file))
      setImages(imageUrls)
    }
  }

  return (
    <div className="space-y-4">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="images">Images</Label>
        <Input id="images" type="file" accept="image/*" multiple onChange={handleFileChange} />
      </div>

      {selectedFiles && (
        <div className="text-sm">
          {Array.from(selectedFiles).map((file, index) => (
            <div key={index} className="flex items-center gap-2">
              <ImageIcon className="h-4 w-4 text-primary" />
              <span>{file.name}</span>
            </div>
          ))}
        </div>
      )}

      <Button onClick={handleUpload} disabled={!selectedFiles}>
        <Upload className="mr-2 h-4 w-4" />
        Upload Images
      </Button>
    </div>
  )
}
