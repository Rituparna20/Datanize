"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ImageUpload } from "@/components/image-upload"
import { ImageLabeler } from "@/components/image-labeler"

export default function ImageLabelingPage() {
  const [images, setImages] = useState<string[]>([])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Image Labeling</h1>
        <p className="text-muted-foreground">Upload and label images for computer vision tasks</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Upload Images</CardTitle>
            <CardDescription>Upload images to label for your dataset</CardDescription>
          </CardHeader>
          <CardContent>
            <ImageUpload setImages={setImages} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Image Labeling</CardTitle>
            <CardDescription>Label your images for training</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ImageLabeler images={images} />
          </CardContent>
          <CardFooter>
            <Button className="w-full">Export YAML</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
