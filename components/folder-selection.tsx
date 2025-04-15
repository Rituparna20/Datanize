"use client"

import { useState } from "react"
import { Folder } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FolderSelection() {
  const [folderPath, setFolderPath] = useState("")

  const handleBrowse = () => {
    // In a real app, you would open a folder picker dialog
    // For now, we'll just simulate it with a fake path
    setFolderPath("C:/Users/username/Documents/DataScienceProject")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Output Location</CardTitle>
        <CardDescription>Select where to save the processed data files</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-end gap-2">
          <div className="grid w-full gap-1.5">
            <Label htmlFor="folder-path">Output Folder</Label>
            <Input
              id="folder-path"
              value={folderPath}
              onChange={(e) => setFolderPath(e.target.value)}
              placeholder="Select output folder"
              readOnly
            />
          </div>
          <Button onClick={handleBrowse}>
            <Folder className="mr-2 h-4 w-4" />
            Browse
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
