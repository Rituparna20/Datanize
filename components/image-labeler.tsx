"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

interface ImageLabelerProps {
  images: string[]
}

export function ImageLabeler({ images }: ImageLabelerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [labels, setLabels] = useState<Record<number, string[]>>({})
  const [newLabel, setNewLabel] = useState("")

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(images.length - 1, prev + 1))
  }

  const addLabel = () => {
    if (newLabel.trim()) {
      setLabels((prev) => {
        const currentLabels = prev[currentIndex] || []
        return {
          ...prev,
          [currentIndex]: [...currentLabels, newLabel.trim()],
        }
      })
      setNewLabel("")
    }
  }

  const removeLabel = (labelToRemove: string) => {
    setLabels((prev) => {
      const currentLabels = prev[currentIndex] || []
      return {
        ...prev,
        [currentIndex]: currentLabels.filter((label) => label !== labelToRemove),
      }
    })
  }

  if (images.length === 0) {
    return (
      <div className="flex h-full items-center justify-center text-muted-foreground">
        Upload images to start labeling
      </div>
    )
  }

  const currentLabels = labels[currentIndex] || []

  return (
    <div className="flex h-full flex-col">
      <div className="relative flex-1 mb-4">
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`Image ${currentIndex + 1}`}
          fill
          className="object-contain"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Input
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
            placeholder="Add a label"
            onKeyDown={(e) => e.key === "Enter" && addLabel()}
          />
          <Button size="icon" onClick={addLabel}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          {currentLabels.map((label, index) => (
            <Badge key={index} variant="secondary" className="flex items-center gap-1">
              {label}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 p-0 hover:bg-transparent"
                onClick={() => removeLabel(label)}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ))}
        </div>

        <div className="flex justify-between">
          <Button variant="outline" size="sm" onClick={handlePrevious} disabled={currentIndex === 0}>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          <span className="text-sm text-muted-foreground">
            {currentIndex + 1} of {images.length}
          </span>
          <Button variant="outline" size="sm" onClick={handleNext} disabled={currentIndex === images.length - 1}>
            Next
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
