"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function DataSplitForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Train-Test Split</CardTitle>
        <CardDescription>Configure how to split your dataset into training and testing sets</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="split-ratio">Train-Test Split Ratio</Label>
            <span className="text-sm">70% - 30%</span>
          </div>
          <Slider id="split-ratio" defaultValue={[70]} min={50} max={90} step={5} />
        </div>

        <div className="flex items-center space-x-2">
          <Switch id="stratify" />
          <Label htmlFor="stratify">Stratify by target variable</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Switch id="shuffle" defaultChecked />
          <Label htmlFor="shuffle">Shuffle data before splitting</Label>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="random-state">Random State</Label>
            <span className="text-sm">42</span>
          </div>
          <Slider id="random-state" defaultValue={[42]} min={0} max={100} step={1} />
        </div>
      </CardContent>
    </Card>
  )
}
