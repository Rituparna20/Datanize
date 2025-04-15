"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

interface ColumnSelectorProps {
  xColumn: string
  setXColumn: (value: string) => void
  yColumn: string
  setYColumn: (value: string) => void
}

export function ColumnSelector({ xColumn, setXColumn, yColumn, setYColumn }: ColumnSelectorProps) {
  // Mock data - in a real app, this would come from  yColumn, setYColumn }: ColumnSelectorProps) {
  // Mock data - in a real app, this would come from your backend
  const columns = ["Age", "Income", "Education", "Occupation", "Gender", "MaritalStatus", "CreditScore"]

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="x-column">X-Axis Column</Label>
        <Select value={xColumn} onValueChange={setXColumn}>
          <SelectTrigger id="x-column">
            <SelectValue placeholder="Select column" />
          </SelectTrigger>
          <SelectContent>
            {columns.map((column) => (
              <SelectItem key={column} value={column}>
                {column}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="y-column">Y-Axis Column</Label>
        <Select value={yColumn} onValueChange={setYColumn}>
          <SelectTrigger id="y-column">
            <SelectValue placeholder="Select column" />
          </SelectTrigger>
          <SelectContent>
            {columns.map((column) => (
              <SelectItem key={column} value={column}>
                {column}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
