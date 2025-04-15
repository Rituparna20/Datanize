"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartSelector } from "@/components/chart-selector"
import { ColumnSelector } from "@/components/column-selector"
import { ChartPreview } from "@/components/chart-preview"

export default function VisualizePage() {
  const [chartType, setChartType] = useState("bar")
  const [xColumn, setXColumn] = useState("")
  const [yColumn, setYColumn] = useState("")

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Data Visualization</h1>
        <p className="text-muted-foreground">Create charts and visualizations from your data</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Chart Configuration</CardTitle>
            <CardDescription>Select columns and chart type</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ColumnSelector xColumn={xColumn} setXColumn={setXColumn} yColumn={yColumn} setYColumn={setYColumn} />
            <ChartSelector chartType={chartType} setChartType={setChartType} />
          </CardContent>
          <CardFooter>
            <Button className="w-full">Export to PDF</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Chart Preview</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <ChartPreview chartType={chartType} xColumn={xColumn} yColumn={yColumn} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
