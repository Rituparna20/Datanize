"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function FeatureSelectionForm() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Feature Selection Method</CardTitle>
          <CardDescription>Choose a method to select the most important features</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup defaultValue="pca" className="space-y-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="pca" id="pca" />
              <Label htmlFor="pca">Principal Component Analysis (PCA)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="pls" id="pls" />
              <Label htmlFor="pls">Partial Least Squares (PLS)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="correlation" id="correlation" />
              <Label htmlFor="correlation">Correlation-based Selection</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Parameters</CardTitle>
          <CardDescription>Adjust parameters for the selected method</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="n-components">Number of Components</Label>
              <span className="text-sm">5</span>
            </div>
            <Slider id="n-components" defaultValue={[5]} max={10} step={1} />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="variance">Explained Variance</Label>
              <span className="text-sm">0.95</span>
            </div>
            <Slider id="variance" defaultValue={[0.95]} min={0.5} max={1} step={0.01} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
